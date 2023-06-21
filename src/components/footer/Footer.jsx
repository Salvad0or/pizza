import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/img/Footer/FooterLogo.png";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={style.container}>
				<div className={style.leftSide}>
					<div>
						<img src={logo} alt="logo" />
					</div>
					<div>
						<ul className={style.ul}>
							<li className={style.liHeader}>Компания</li>
							<li className={style.li}>О компании</li>
							<li className={style.li}>Контакты</li>
							<li className={style.li}>Политика</li>
							<li className={style.li}>Вакансии</li>
							<li className={style.li}>Отзывы</li>
						</ul>
					</div>

					<div>
						<ul className={style.ul}>
							<li className={style.liHeader}>Клиентам</li>
							<li className={style.li}>Доставка и оплата</li>
							<li className={style.li}>Гарантия и возврат товара</li>
							<li className={style.li}>Клиентская служба</li>
							<li className={style.li}>Система скидок</li>
						</ul>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Footer;
