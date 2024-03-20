import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

import data from "./data";
import Detail from "./routes/Detail";
import axios from "axios";

import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  function addShoes(addShoes) {
    let copy = [...shoes];
    addShoes.forEach((shoes) => {
      copy.push(shoes);
    });
    setShoes(copy);
  }

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
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ItemDetail shoes={shoes} />} />
        {/* url 파라미터 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는 페이지요</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>
      </Routes>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((data) => {
              console.log("데이터크기: " + data.data.length);
              addShoes(data.data);
            })
            .catch(() => {
              console.log("실패함");
            });
        }}
      >
        버튼
      </button>
    </div>
  );
}

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

function ItemDetail(props) {
  return (
    <div>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {props.shoes.map(function (shoes, index) {
            return <Card shoes={shoes} index={index} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.index + 1) +
          ".jpg"
        }
        width="80%"
        alt=""
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  );
}

export default App;
