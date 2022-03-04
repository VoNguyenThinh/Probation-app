import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./Slice/MainSlice";
import userRducer from "./Slice/UserSlice";

const store = configureStore({
  reducer: {
    mainSlice: mainReducer,
    userSlice: userRducer,
  },
});

export { store };
