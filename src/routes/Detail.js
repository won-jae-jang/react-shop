import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Button, Form, InputGroup, Nav } from "react-bootstrap";
import { addShoes } from "../store/cartSlice.js";
import { Context1 } from "./../App.js";
import { useParams } from "react-router";

function Detail(props) {
  let { id } = useParams();
  let dispatch = useDispatch(); //store.js 에 요청을 보내는 함수

  let [tab, setTab] = useState(0);
  return (
    <div>
      <img
        // src={"https://codingapple1.github.io/shop/shoes1.jpg"}
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (Number(id) + 1) +
          ".jpg"
        }
        width="80%"
        alt=""
      />
      <hr />
      <h4>{props.shoes[id].title}</h4>
      <p>{props.shoes[id].content}</p>
      <p>{props.shoes[id].price}</p>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(
            addShoes({
              id: 0,
              name: "White and Black",
              count: 2,
            })
          );
        }}
      >
        주문하기
      </Button>{" "}
      {/* defaultActiveKey는 기본으로 눌려있을 버튼 */}
      <Nav variant="tabs" defaultActiveKey="link1">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");
  let { quantity, shoes } = useContext(Context1);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 10);
    // clean up function: useEffect 실행전에 동작
    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>{quantity}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
