import React from "react";
import style from "./Header.module.css";
import MyInput from "../UI/MyInput";
import RightSide from "./rightSide/RightSide";
import "../../../src/index";

const Header = () => {
	return (
		<div>
			<div className="container">
				<div className={style.headerMain}>
					<ul className={style.topMenuUl}>
						<li className={style.topMenuItem}>Контакты</li>
						<li className={style.topMenuItem}>Сервис</li>
						<li className={style.topMenuItem}>Получение и оплата</li>
						<li className={style.topMenuItem}>О компании</li>
					</ul>
				</div>

				<div className={style.thirtyLevelHeader}>
					<MyInput />
					<RightSide />
				</div>
			</div>
		</div>
	);
};

export default Header;
