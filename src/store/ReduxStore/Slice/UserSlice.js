import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
const initialState = {
  listUser: [],
};

export const UserSlice = createSlice({
  name: "userSlice",
  initialState,

  reducers: {
    createUser: (state, action) => {
      state.listUser.push(action.payload);
    },
    deleteUser: (state, action) => {
      _.remove(state.listUser, { userId: action.payload });
    },
    updateUser: (state, action) => {
      _.remove(state.listUser, { userId: action.payload.userId });
      state.listUser.push(action.payload);
    },
  },
});

export const { createUser, deleteUser, updateUser } = UserSlice.actions;

export const getUserState = (state) => state.userSlice;

export default UserSlice.reducer;
