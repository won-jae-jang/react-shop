import { useContext, useEffect, useState } from "react";
import { Col, Button, Form, InputGroup, Nav } from "react-bootstrap";
import { Context1 } from "./../App.js";

function Detail(props) {
  let { quantity, shoes } = useContext(Context1);

  let [timer, setTimer] = useState(true);
  let [detailFade, setDetailFade] = useState("");
  let [tab, setTab] = useState(0);

  // []는 useEffect 실행 조건
  // []내용이 비어 있으면 컴포넌트 mount시 1회만 실행한다
  useEffect(() => {
    let a = setTimeout(() => {
      setTimer(false);
    }, 3000);
    // useEffect 실행전에 동작함: clean up function
    // mount 시 실행 X unmount 시 실행됨
    return () => {
      clearTimeout(a);
    };
  }, []);

  // Detail 페이지 애니메이션 주기
  useEffect(() => {
    setTimeout(() => {
      setDetailFade("end");
    }, 10);
    return () => {
      setDetailFade("");
    };
  });

  return (
    <div>
      {quantity}
      {timer === true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <img
        src={"https://codingapple1.github.io/shop/shoes1.jpg"}
        width="80%"
        alt=""
      />
      <hr />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].content}</p>
      <p>{props.shoes[0].price}</p>
      <Button variant="primary">주문하기</Button>{" "}
      {/* defaultActiveKey는 기본으로 눌려있을 버튼 */}
      <Nav variant="tabs" defaultActiveKey="link0">
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
