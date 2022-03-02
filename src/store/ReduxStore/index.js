import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./Slice/MainSlice";


const store = configureStore({

    reducer: {
        mainSlice: mainReducer,
    }

})


export { store }