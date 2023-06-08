import React, { useEffect, useState } from "react";
import style from "./GoodsAfterSearch.module.css";
import Sort from "../../sort/Sort";
import GoodsContainer from "../goodsContainer/GoodsContainer";
import "../../../../index";
import Sceleton from "../../../UI/Loaders/Sceleton";

const GoodsAfterSearch = () => {
	const [goods, setGoods] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://6481ff8b29fa1c5c503271d7.mockapi.io/asics")
			.then((res) => res.json())
			.then((json) => {
				setGoods(json);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<div>
				<Sort />
			</div>

			<div className={style.wrapper}>
				{isLoading
					? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
					: goods.map((item) => (
							<GoodsContainer
								key={item.id}
								className={style.item}
								item={item}
							/>
					  ))}
			</div>
		</div>
	);
};

export default GoodsAfterSearch;
