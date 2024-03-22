import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", //key
  initialState: { name: "kim", age: 20 }, //value
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    // 파라미터 추가
    changeAge(state, a) {
      state.age += a.payload;
    },
  },
});

export default user;
export let { changeName, changeAge } = user.actions;
