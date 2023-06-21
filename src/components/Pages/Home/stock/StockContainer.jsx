import React from "react";
import style from "./Stock.module.css";

const StockContainer = () => {
	return (
		<div className={style.container}>
			<div className={style.stockContainer}>
				<div className={style.stockPhoto}></div>

				<span className={style.howLong}>До 31 мая</span>
				<span className={style.promocode}>
					Скидки на все рейзеры по промокоду RAIZER
				</span>
			</div>
		</div>
	);
};

export default StockContainer;
