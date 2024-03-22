import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, deleteShoes } from "../store/cartSlice";

function Cart() {
  // (state) => state.stock 는 .. => {return state.stock} 과 동일
  let carts = useSelector((state) => state.carts); //redux 가져와줌
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); //store.js 에 요청을 보내는 함수
  console.log(carts);

  return (
    <div>
      <br />
      <h6>
        {state.user.name} ({state.user.age}) 의 장바구니
      </h6>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, index) => (
            <tr key={index}>
              <td>{carts[index].id}</td>
              <td>{carts[index].name}</td>
              <td>{carts[index].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(
                      increaseQuantity({
                        id: `${carts[index].id}`,
                        name: `${carts[index].name}`,
                        count: 2,
                      })
                    );
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteShoes(`${carts[index].id}`));
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
