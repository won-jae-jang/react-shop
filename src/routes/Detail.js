import { useEffect, useState } from "react";
import { Col, Button } from "react-bootstrap";

function Detail(props) {
  let [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  });

  return (
    <Col sm>
      {timer === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <img
        src={"https://codingapple1.github.io/shop/shoes1.jpg"}
        width="80%"
        alt=""
      />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].content}</p>
      <p>{props.shoes[0].price}</p>
      <Button variant="primary">주문하기</Button>{" "}
    </Col>
  );
}

export default Detail;
