import React, { useEffect, useState } from "react";
import style from "./GoodsAfterSearch.module.css";
import Sort from "../../sort/Sort";
import GoodsContainer from "../goodsContainer/GoodsContainer";
import "../../../../index";
import Sceleton from "../../../UI/Loaders/Sceleton";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/slices/addToCartSlice";

const GoodsAfterSearch = () => {
	const [goods, setGoods] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [sortItem, setSortItem] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://6481ff8b29fa1c5c503271d7.mockapi.io/asics?sortBy=${sortItem}`
			)
			.then((result) => {
				setGoods(result.data);
				setLoading(false);
			});
	}, [sortItem]);

	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => dispatch(addToCart())}>":vfnm"</button>
			<div>
				<Sort changeSortItem={setSortItem} />
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
