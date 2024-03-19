import { Col, Button } from "react-bootstrap";
import { useParams } from "react-router";

function Detail(props) {
  let { id } = useParams(); //파라미터 가져오기
  console.log("id = " + id);
  const findShoesIndex = props.shoes.findIndex((shoe) => {
    shoe.id === id;
    console.log("shoe.id = " + shoe.id);
  });
  console.log(findShoesIndex);

  for (let i = 0; i < props.shoes.length; i++) {
    if (id === props.shoes[i].id) {
      findShoesIndex = i;
      break;
    }
  }

  return (
    <Col sm>
      <img
        src={"https://codingapple1.github.io/shop/shoes1.jpg"}
        width="100%"
        alt=""
      />
      <h4>{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <Button variant="primary">주문하기</Button>{" "}
    </Col>
  );
}

export default Detail;
