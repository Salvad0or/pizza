import React from "react";
import { NavLink } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import style from "./HomePage.module.css";
import MainPageSlider from "../../UI/Sliders/SliderOnManePage/MainPageSlider";
import asic1 from "../../../assets/img/slider/asic1.jpg";
import asic2 from "../../../assets/img/slider/asic2.jpg";
import asic3 from "../../../assets/img/slider/asic3.jpg";

const HomePage = () => {
	return (
		<div className={style.content}>
			<LeftMenu />
			<div>
				<MainPageSlider>
					<img className={style.asics} src={asic1} alt="asic" />
					<img src={asic2} alt="asic" />
					<img src={asic3} alt="asic" />
				</MainPageSlider>
				<NavLink to="search">К товарам</NavLink>
			</div>
		</div>
	);
};

export default HomePage;
