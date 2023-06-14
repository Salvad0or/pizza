import React from "react";
import style from "./Header.module.css";
import MyInput from "../UI/MyInput";
import RightSide from "./rightSide/RightSide";
import "../../../src/index";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Logo.png";
import rect from "../../assets/img/Rectangle1.png";

const Header = () => {
	return (
		<div>
			<svg className={style.sprite}>
				<symbol id="phone" viewBox="0 0 512.001 512.001">
					<path
						d="M462.491,468.206l-33.938,33.937c-6.062,6.031-23.812,9.844-24.343,9.844c-107.435,0.905-210.869-41.279-286.882-117.31
		C41.097,318.46-1.136,214.619,0.036,106.872c0-0.063,3.891-17.312,9.938-23.312l33.937-33.968
		c12.453-12.437,36.295-18.062,52.998-12.5l7.156,2.406c16.703,5.562,34.155,23.999,38.78,40.967l17.093,62.717
		c4.64,17-1.594,41.186-14.031,53.623l-22.687,22.687c22.25,82.467,86.919,147.121,169.339,169.402l22.687-22.688
		c12.438-12.438,36.687-18.656,53.687-14.031l62.718,17.125c16.937,4.594,35.374,22.03,40.968,38.748l2.375,7.156
		C480.552,431.926,474.928,455.769,462.491,468.206z M287.996,255.993h31.999c0-35.343-28.655-63.998-63.998-63.998v31.999
		C273.636,223.994,287.996,238.368,287.996,255.993z M415.992,255.993c0-88.373-71.623-159.996-159.995-159.996v32
		c70.591,0,127.996,57.436,127.996,127.996H415.992z M255.997,0v31.999c123.496,0,223.993,100.497,223.993,223.994h31.999
		C511.989,114.622,397.368,0,255.997,0z"
					/>
				</symbol>

				<symbol id="geo" viewBox="0 0 16 16">
					<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
				</symbol>
			</svg>
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

			<div className={style.headerMiddle}>
				<img src={logo} alt="logo" />

				<div className={style.headerMiddlePhoneAndShops}>
					<div className={style.phone}>
						<svg className={style.svg}>
							<use href="#phone"></use>
						</svg>
						<span className={style.phoneText}>8(800)555-35-35</span>
					</div>
					<img src={rect} alt="rect" className={style.rect} />
					<div className={style.shops}>
						<svg className={style.svg}>
							<use href="#geo"></use>
						</svg>
						<span className={style.phoneText}>Магазины</span>
					</div>
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
