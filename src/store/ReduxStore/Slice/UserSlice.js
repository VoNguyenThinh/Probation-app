import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { createUser } = UserSlice.actions;

export const getUserState = (state) => state.userSlice;

export default UserSlice.reducer;
