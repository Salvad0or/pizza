import React from "react";
import style from "./Stock.module.css";
import StockContainer from "./StockContainer";

const Stock = () => {
	return (
		<div className={style.stock}>
			<span className={style.text}>Акции</span>
			<div className={style.container}>
				<StockContainer />
				<StockContainer />
				<StockContainer />
				<StockContainer />
			</div>
		</div>
	);
};

export default Stock;
