import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 777,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		increace(state) {
			state.value += 1;
		},
	},
});

export const { increace } = filterSlice.actions;

export default filterSlice.reducer;
