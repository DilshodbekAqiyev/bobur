import { configureStore } from "@reduxjs/toolkit";
import { flowersReducers } from "./flowers-slice";

export const store = configureStore({
    reducer:{
        flowers: flowersReducers
    }
})