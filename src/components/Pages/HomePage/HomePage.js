import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<div>It will be a home page</div>
			<NavLink to="search">К товарам</NavLink>
		</div>
	);
};

export default HomePage;
