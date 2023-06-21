import React from "react";
import { NavLink } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import style from "./HomePage.module.css";
import MainPageSlider from "../../../UI/Sliders/SliderOnManePage/MainPageSlider";
import asic1 from "../../../../assets/img/slider/asic1.jpg";
import asic2 from "../../../../assets/img/slider/asic2.jpg";
import asic3 from "../../../../assets/img/slider/asic3.jpg";
import GoodsOfMonth from "../goodsOfMonth/GoodsOfMonth";
import Stock from "../stock/Stock";
import AsicService from "../asicService/AsicService";

const HomePage = () => {
	return (
		<div>
			<div className={style.mainContent}>
				<LeftMenu />
				<div>
					<MainPageSlider>
						<img className={style.asics} src={asic1} alt="asic" />
						<img src={asic2} alt="asic" />
						<img src={asic3} alt="asic" />
					</MainPageSlider>

					<div className={style.homeMiddleNavigation}>
						<div className={style.buttonContainer}>Контейнеры</div>
						<div className={style.buttonContainer}>Ремонтный сервис</div>
						<div className={style.buttonContainer}>Майнинг под ключ</div>
					</div>

					<div className={style.offers}>
						<div className={style.offersConainer}></div>
						<div className={style.offersConainer}></div>
						<div className={style.offersConainer}></div>
					</div>

					{/* <NavLink to="search">К товарам</NavLink> */}
				</div>
			</div>

			<GoodsOfMonth />
			<Stock />
			<AsicService />
		</div>
	);
};

export default HomePage;
