import React from "react";
import style from "./Header.module.css";
import MyInput from "../UI/MyInput";
import RightSide from "./rightSide/RightSide";
import "../../../src/index";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<div className={style.headerMain}>
				<div>
					<ul className={style.topMenuUl}>
						<li className={style.topMenuItem}>Контакты</li>
						<li className={style.topMenuItem}>Сервис</li>
						<li className={style.topMenuItem}>Получение и оплата</li>
						<li className={style.topMenuItem}>О компании</li>
					</ul>
				</div>
			</div>

			<div className={style.thirtyLevelHeader}>
				<span className={style.catalog}>Каталог товаров</span>
				<div className={style.rightSide}>
					<MyInput />
					<RightSide />
				</div>
			</div>
		</div>
	);
};

export default Header;
