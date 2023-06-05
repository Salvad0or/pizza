import React from "react";
import style from "./GoodsAfterSearch.module.css";
import Sort from "../../sort/Sort";
import GoodsContainer from "../goodsContainer/GoodsContainer";
import RightSide from "../../../header/rightSide/RightSide";

const GoodsAfterSearch = () => {
	return (
		<div className={style.container}>
			<Sort />
			<div className={style.goodsRow}>
				<GoodsContainer className={style.goods} />
				<GoodsContainer />
				<GoodsContainer />
				<GoodsContainer />
				<GoodsContainer />
			</div>
		</div>
	);
};

export default GoodsAfterSearch;
