import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./Slice/MainSlice";
import userRducer from "./Slice/UserSlice";
import TranlateReducer from "../ReduxStore/Slice/TranlationsSlice";

const store = configureStore({
  reducer: {
    mainSlice: mainReducer,
    userSlice: userRducer,
    TranlateSlice: TranlateReducer,
  },
});

export { store };
