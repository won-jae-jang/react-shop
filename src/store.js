// index.js에 가서 <Provider store={store}> 작성
import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import carts from "./store/cartSlice";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  // 등록하는 곳
  reducer: {
    // 작명 : state.reducer
    user: user.reducer,
    stock: stock.reducer,
    carts: carts.reducer,
  },
});
