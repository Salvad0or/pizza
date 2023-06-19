import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import sortSlice from "./slices/sortSlice";
import addToCartSlice from "./slices/addToCartSlice";

export const store = configureStore({
	reducer: { filterSlice, sortSlice, addToCartSlice },
});
