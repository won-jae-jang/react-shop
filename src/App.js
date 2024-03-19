import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

import data from "./data";
import Detail from "./routes/Detail";

import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  let [shoes] = useState(data);
  /*
  훅: 유용한거 모아둔 함수
  useNavigate: 페이지 이동을 도와주는 함수(a 태그처럼 텍스트 안뜸)
  useNavigate(1): 앞으로 한페이지 이동
  useNavigate(-1): 뒤로 한페이지 이동
  */
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
                navigate("/detail");
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
      {/* nested route를 어디에 위치시킬것인가 결정 */}
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
