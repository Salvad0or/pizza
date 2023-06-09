import React from "react";
import style from "./PageAfterSearch.module.css";
import LeftNavigationAfterSearch from "../leftnavigation/afterSearch/LeftNavigationAfterSearch";
import GoodsAfterSearch from "../goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";

const PageAfterSearch = () => {
	return (
		<div className={style.content}>
			<LeftNavigationAfterSearch />
			<GoodsAfterSearch />
		</div>
	);
};

export default PageAfterSearch;
