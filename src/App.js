import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

import data from "./data";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import axios from "axios";

import { createContext, lazy, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export let Context1 = createContext(); //state 보관함

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  let [shoes, setShoes] = useState(data);
  let [quantity, setQuantity] = useState([10, 11, 12]); //재고 데이터
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
  let navigate = useNavigate();

  return (
    <div class="col-6 col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
        onClick={() => {
          let watchList = JSON.parse(localStorage.getItem("watched"));
          watchList.push(props.i);
          localStorage.setItem(
            "watched",
            JSON.stringify([...new Set(watchList)])
          );
          navigate(`/detail/${props.shoes.id}`);
        }}
        alt=""
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
