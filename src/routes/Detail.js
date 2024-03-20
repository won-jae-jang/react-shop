import { useEffect, useState } from "react";
import { Col, Button, Form, InputGroup } from "react-bootstrap";

function Detail(props) {
  let [timer, setTimer] = useState(true);
  let [inputError, setInputError] = useState(false);
  let [input, setInput] = useState();

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

  useEffect(() => {
    console.log("입력한 값: " + input);
    console.log("입력한 값 타입: " + typeof input);
    if (typeof input === "string") {
      setInputError(true);
    } else {
      setInputError(false);
    }
  }, [input]);

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
      <hr />
      <div>
        <input
          type="text"
          placeholder="숫자를 입력해주세요"
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setInput(parseInt(e.target.value));
            } else {
              setInput(e.target.value);
            }
          }}
        />
        {inputError === true ? <p>숫자를 입력해주세요</p> : null}
      </div>
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].content}</p>
      <p>{props.shoes[0].price}</p>
      <Button variant="primary">주문하기</Button>{" "}
    </Col>
  );
}

export default Detail;
