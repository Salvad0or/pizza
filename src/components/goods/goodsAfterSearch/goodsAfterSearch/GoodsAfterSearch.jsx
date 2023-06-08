import React, { useEffect, useState } from "react";
import style from "./GoodsAfterSearch.module.css";
import Sort from "../../sort/Sort";
import GoodsContainer from "../goodsContainer/GoodsContainer";
import "../../../../index";

const GoodsAfterSearch = () => {
	const [goods, setGoods] = useState([]);

	useEffect(() => {
		fetch("https://6481ff8b29fa1c5c503271d7.mockapi.io/asics")
			.then((res) => res.json())
			.then((json) => setGoods(json));
	}, []);

	return (
		<div>
			<div>
				<Sort />
			</div>

			<div className={style.wrapper}>
				{goods.map((item) => (
					<GoodsContainer key={item.id} className={style.item} item={item} />
				))}
			</div>
		</div>
	);
};

export default GoodsAfterSearch;
