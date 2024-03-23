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
    },
    addShoes(state, addItem) {
      let index = state.findIndex((item) => {
        return item.id === addItem.payload.id;
      });
      console.log("index: " + index);

      if (index === -1) {
        state.push(addItem.payload);
        return;
      }
      state[index].count++;
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
