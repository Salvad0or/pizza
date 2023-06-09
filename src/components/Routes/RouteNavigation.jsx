import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../cart/Cart";

const RouteNavigation = () => {
	return (
		<Routes>
			<Route path="/cart" element={<Cart />} />
		</Routes>
	);
};

export default RouteNavigation;
