import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

import data from "./data";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import axios from "axios";

import { createContext, lazy, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export let Context1 = createContext(); //state 보관함

function App() {
  let [shoes, setShoes] = useState(data);
  let [quantity, setQuantity] = useState([10, 11, 12]); //재고 데이터
  let [clickCount, setClickCount] = useState(0);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomepageItems shoes={shoes} />} />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ quantity, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="*" element={<div>없는 페이지요</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
      {/* <button
        onClick={() => {
          setLoading(true);
          if (clickCount === 2) {
            alert("더 이상 조회할 데이터가 없습니다");
          } else {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((data) => {
                console.log("데이터크기: " + data.data.length);
                setClickCount(clickCount + 1);
                setLoading(false);
                let copy = [...shoes, ...data.data];
                setShoes(copy);
              })
              .catch(() => {
                setLoading(false);
                console.log("실패함");
              });
          }

          // 한번에 2곳에 요청을 보낼때
          Promise.all([axios.get("/url1"), axios.get("/url2")]).then(() => {
            // 성공시 로직 실행
          });
        }}
      ></button> */}
      {loading === true ? <p>이미지를 불러오는 중입니다...!</p> : null}
    </div>
  );
}

function HomepageItems(props) {
  return (
    <>
      <div className="main-bg"></div>
      <div class="container">
        <div class="row">
          {props.shoes.map((shoes, index) => {
            return <Card shoes={shoes} i={index + 1}></Card>;
          })}
        </div>
      </div>
      {/* 더보기 버튼 */}
    </>
  );
}

function Card(props) {
  return (
    <div class="col-6 col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

function MoreButton() {}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
