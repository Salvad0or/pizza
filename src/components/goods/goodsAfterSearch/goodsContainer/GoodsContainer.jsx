import React from "react";
import style from "./GoodsContainer.module.css";

const GoodsContainer = () => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<span>Код : 12345</span>
			</div>
		</div>
	);
};

export default GoodsContainer;
