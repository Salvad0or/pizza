import React, { useCallback } from "react";
import style from "./Header.module.css";
import MyInput from "../UI/MyInput";
import RightSide from "./rightSide/RightSide";
import "../../../src/index";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/Logo.png";
import rect from "../../assets/img/Rectangle1.png";
import debounce from "lodash.debounce";
import telegram from "../../assets/svg/telegram.svg";

const Header = () => {
	const changeInput = useCallback(
		debounce((value) => {
			console.log(value);
		}, 500),
		[]
	);

	return (
		<>
			<div className={style.headerFirstLevel}>
				<div className={style.container}>
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

						<symbol id="telegram" viewBox="0 0 256 256">
							<g>
								<path
									d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
									fill="#40B3E0"
								></path>
								<path
									d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
									fill="#FFFFFF"
								></path>
								<path
									d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
									fill="#D2E5F1"
								></path>
								<path
									d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
									fill="#B5CFE4"
								></path>
							</g>
						</symbol>

						<symbol id="whatsApp" viewBox="0 0 48 48">
							<g
								id="Icons"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g
									id="Color-"
									transform="translate(-700.000000, -360.000000)"
									fill="#67C15E"
								>
									<path
										d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z"
										id="Whatsapp"
									></path>
								</g>
							</g>
						</symbol>

						<symbol id="youTube" viewBox="0 0 72 72">
							<g fill="none" fill-rule="evenodd">
								<path
									d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
									fill="#FF0002"
								/>

								<path
									d="M31.044,42.269916 L31.0425,28.6877416 L44.0115,35.5022437 L31.044,42.269916 Z M59.52,26.3341627 C59.52,26.3341627 59.0505,23.003199 57.612,21.5363665 C55.7865,19.610299 53.7405,19.6012352 52.803,19.4894477 C46.086,19 36.0105,19 36.0105,19 L35.9895,19 C35.9895,19 25.914,19 19.197,19.4894477 C18.258,19.6012352 16.2135,19.610299 14.3865,21.5363665 C12.948,23.003199 12.48,26.3341627 12.48,26.3341627 C12.48,26.3341627 12,30.2467232 12,34.1577731 L12,37.8256098 C12,41.7381703 12.48,45.6492202 12.48,45.6492202 C12.48,45.6492202 12.948,48.9801839 14.3865,50.4470165 C16.2135,52.3730839 18.612,52.3126583 19.68,52.5135736 C23.52,52.8851913 36,53 36,53 C36,53 46.086,52.9848936 52.803,52.4954459 C53.7405,52.3821478 55.7865,52.3730839 57.612,50.4470165 C59.0505,48.9801839 59.52,45.6492202 59.52,45.6492202 C59.52,45.6492202 60,41.7381703 60,37.8256098 L60,34.1577731 C60,30.2467232 59.52,26.3341627 59.52,26.3341627 L59.52,26.3341627 Z"
									fill="#FFF"
								/>
							</g>
						</symbol>

						<symbol id="menu" viewBox="0 0 32 32">
							<path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
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
				</div>
			</div>

			<div className={style.container}>
				<div className={style.headerMiddle}>
					<NavLink to="/">
						<img src={logo} alt="logo" />
					</NavLink>

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

					<div className={style.enter}>
						<NavLink className={style.enterLink}>Вход</NavLink>
						<span> | </span>
						<NavLink className={style.enterLink}>Регистрация</NavLink>
					</div>
				</div>
			</div>

			<div className={style.thirdLevel}>
				<div className={style.container}>
					<div className={style.thirdLevelHeader}>
						<div className={style.catalog}>
							<svg className={style.menuSvg}>
								<use href="#menu" />
							</svg>
							<span>Каталог товаров</span>
						</div>
						<div className={style.rightSide}>
							<MyInput onChange={(event) => changeInput(event.target.value)} />
							<RightSide />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
