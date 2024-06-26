import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";

export const Store = configureStore({
    reducer:{
        UserReducer
    }
})