import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import bg from "./img/bg.png"; //이미지 가져오기

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm>
            {/* public 폴더의 이미지 쓸때는 /이미지경로 로 접근 */}
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
              alt=""
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
