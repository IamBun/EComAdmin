import { createSlice } from "@reduxjs/toolkit";

let name = sessionStorage.getItem("isUser");
let userId;
let token = sessionStorage.getItem("token");
//  = localStorage.getItem("token");
const currentUserSlice = createSlice({
  name: "currentUserSlice",
  initialState: { name, token, userId },
  reducers: {
    login(state, action) {
      //khi dang nhap thi nhan email nguoi dung hien tai, luu vao storage
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      localStorage.setItem("name", state.name);
      localStorage.setItem("userId", state.userId);
      // localStorage.setItem("token", state.token);
    },
    logout(state) {
      // khi logout thi xoa email, xoa gio hang, xoa nguoi dung hien tai
      state.name = null;
      state.token = null;
      state.userId = null;
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("isUser");
    },
  },
});

export const currentUserActions = currentUserSlice.actions;
export default currentUserSlice.reducer;
