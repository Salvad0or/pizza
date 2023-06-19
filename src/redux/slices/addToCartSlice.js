import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	goodsInCart: [{}],
};

const addToCartSlice = createSlice({
	name: "addToCartSlice",
	initialState,
	reducers: {
		addToCart(state, action) {
			state.goodsInCart.push(action.payload);
		},
	},
});

export const { addToCart, increase } = addToCartSlice.actions;

export default addToCartSlice.reducer;
