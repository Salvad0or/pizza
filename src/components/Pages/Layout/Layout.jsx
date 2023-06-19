import React from "react";
import Header from "../../header/Header";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

const Layout = () => {
	return (
		<>
			<Header />
			<div className={style.container}>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
