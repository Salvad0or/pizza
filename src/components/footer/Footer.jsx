import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/img/Footer/FooterLogo.png";
import { NavLink } from "react-router-dom";
import rect from "../../assets/img/Rectangle1.png";

const Footer = () => {
	return (
		<div className={style.footer}>
			<svg className={style.slice}>
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
			</svg>
			<div className={style.container}>
				<div>
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

					<div className={style.lower}>
						<span className={style.lowerText}>
							Информация на сайте autoclick.ru не является публичной офертой.
						</span>

						<span className={style.lowerText} style={{ textAlign: "center" }}>
							Все права защищены.
						</span>
					</div>
				</div>

				<div className={style.rightSide}>
					<div className={style.phoneBlock}>
						<svg className={style.svg}>
							<use href="#phone" />
						</svg>
						<span className={style.phone}>89046669025</span>
					</div>

					<div className={style.adress}>
						<span className={style.adressText}>Республика Татарстан</span>
						<span className={style.adressText}>Набережные Челны,</span>
						<span className={style.adressText}>
							423800 ул. Моторная, дом 16/4
						</span>
					</div>

					<span className={style.followText}>Следуй за нами</span>

					<div className={style.socialNetworks}>
						<NavLink className={style.socialNetworksLink}>
							<svg className={style.socialSvg}>
								<use href="#telegram" />
							</svg>
							<span className={style.socialText}>Telegram</span>
						</NavLink>

						<img src={rect} alt="rect"></img>

						<NavLink className={style.socialNetworksLink}>
							<svg className={style.socialSvg}>
								<use href="#whatsApp" />
							</svg>
							<span className={style.socialText}>WhatsApp</span>
						</NavLink>

						<img src={rect} alt="rect"></img>

						<NavLink className={style.socialNetworksLink}>
							<svg className={style.socialSvg}>
								<use href="#youTube" />
							</svg>
							<span className={style.socialText}>YouTube</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
