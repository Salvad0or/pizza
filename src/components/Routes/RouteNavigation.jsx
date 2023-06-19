import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../cart/Cart";
import PageAfterSearch from "../Pages/PageAfterSearch";
import Error from "../errors/Error";
import Layout from "../Pages/Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";

const RouteNavigation = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="cart" element={<Cart />} />
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
	);
};

export default RouteNavigation;
