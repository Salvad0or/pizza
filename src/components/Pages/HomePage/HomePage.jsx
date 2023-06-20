import React from "react";
import { NavLink } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import style from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={style.content}>
			<LeftMenu />
			<NavLink to="search">К товарам</NavLink>
		</div>
	);
};

export default HomePage;
