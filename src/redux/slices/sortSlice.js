import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sort: [
		{ name: "Цене", sortType: "price" },
		{ name: "Популярности", sortType: "raiting" },
	],

	activeIndex: 0,
};

const sortSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		changeActiveSort(state) {},
	},
});

export const { changeActiveSort } = sortSlice.actions;
export default sortSlice.reducer;
