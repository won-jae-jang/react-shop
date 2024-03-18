import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

function Detail(props) {
  return (
    <Col sm>
      <img
        src={"https://codingapple1.github.io/shop/shoes1.jpg"}
        width="80%"
        alt=""
      />
      <h4>상품명</h4>
      <p>설명</p>
    </Col>
  );
}

export default Detail;
