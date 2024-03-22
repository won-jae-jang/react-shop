import { createSlice } from "@reduxjs/toolkit";

let carts = createSlice({
  name: "carts",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    // 파라미터 추가
    increaseQuantity(state, itemId) {
      let index = state.findIndex((item) => {
        return item.id === itemId.payload;
      });
      state[index].count++;
      state.forEach((item) => {
        if (item.id === itemId.payload) {
          item.count += 1;
          return;
        }
      });
    },
    // todo 중복된 상품 등록시 수량 증가
    addShoes(state, item) {
      let index = state.findIndex((item) => {
        return item.id === item.payload;
      });
      console.log("index: " + index);
      console.log("item.payload: " + item.payload);
      //   if (index === -1) {
      //     state.push(item.payload);
      //     return;
      //   }
      //   state[index].count++;
    },
    deleteShoes(state, itemId) {
      let index = state.findIndex((item) => {
        return item.id === itemId.payload;
      });
      let deleteItem = state.splice(itemId, 1);
    },
  },
});

export default carts;
export let { increaseQuantity, addShoes, deleteShoes } = carts.actions;
