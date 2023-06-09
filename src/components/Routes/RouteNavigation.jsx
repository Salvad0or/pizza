import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../cart/Cart";
import PageAfterSearch from "../Pages/PageAfterSearch";
import Error from "../Errors/Error";

const RouteNavigation = () => {
	return (
		<Routes>
			<Route path="/cart" element={<Cart />} />
			<Route path="/" element={<PageAfterSearch />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
};

export default RouteNavigation;
