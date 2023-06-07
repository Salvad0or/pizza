import React from "react";
import style from "./GoodsAfterSearch.module.css";
import Sort from "../../sort/Sort";
import GoodsContainer from "../goodsContainer/GoodsContainer";

const GoodsAfterSearch = () => {
	return (
		<div className={style.wrapper}>
			{/* <Sort /> */}

			<GoodsContainer className={style.item} />
			<GoodsContainer className={style.item} />
			<GoodsContainer className={style.item} />
			<GoodsContainer className={style.item} />
		</div>
	);
};

export default GoodsAfterSearch;
