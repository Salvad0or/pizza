import React from "react";
import style from "./GoodsAfterSearch.module.css";
import Sort from "../../sort/Sort";
import GoodsContainer from "../goodsContainer/GoodsContainer";

const GoodsAfterSearch = () => {
	return (
		<div className={style.container}>
			<Sort />
			<GoodsContainer />
		</div>
	);
};

export default GoodsAfterSearch;
