import React from "react";
import style from "./GoodsOfMonth.module.css";

import GoodsContainer from "./GoodsContainer";

const GoodsOfMonth = () => {
	return (
		<div>
			<h1 className={style.description}>Товары месяца</h1>

			<div className={style.container}>
				<GoodsContainer />
				<GoodsContainer />
				<GoodsContainer />
				<GoodsContainer />
				<GoodsContainer />
			</div>
		</div>
	);
};

export default GoodsOfMonth;
