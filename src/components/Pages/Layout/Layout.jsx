import React from "react";
import Header from "../../header/Header";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import Footer from "../../footer/Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<div className={style.container}>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
