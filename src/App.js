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
        <Route path="/detail" element={<Detail />} />
        {/* path="*" 는 지정한 경로를 제외한 모든 폴더 */}
        <Route path="*" element={<div>없는 페이지요</div>} />
        {/* nested routes: 여러 유사한 페이지가 필요할때 사용 */}
        <Route path="/about" element={<About />}>
          {/* 내부 어디에 보여줄 것인지 작성해야 함 */}
          <Route path="member" element={<div>멤버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
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
