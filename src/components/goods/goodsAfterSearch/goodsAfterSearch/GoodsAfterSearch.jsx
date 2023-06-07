import React, { useState } from "react";
import style from "./GoodsAfterSearch.module.css";
import Sort from "../../sort/Sort";
import GoodsContainer from "../goodsContainer/GoodsContainer";
import "../../../../index";

const GoodsAfterSearch = () => {
	const [goods, setGoods] = useState([
		{
			id: 0,
			article: 1,
			raiting: 0,
			decription: "ASIC Miner для майнинга криптовалютных криптовалют",
			isExist: true,
			price: 181000,
		},
		{
			id: 1,
			article: 2,
			raiting: 1,
			decription: "ASIC Miner для майнинга криптовалютных криптовалют",
			isExist: true,
			price: 183000,
		},
		{
			id: 2,
			article: 3,
			raiting: 2,
			decription:
				"ASIC Miner для майнинга криптовалюют df sdf  sfd fsd fsdf d fsdf ",
			isExist: true,
			price: 184000,
		},
		{
			id: 3,
			article: 3,
			raiting: 2,
			decription:
				"ASIC Miner для майнинга криптовалюют df sdf  sfd fsd fsdf d fsdf ",
			isExist: true,
			price: 184000,
		},
		{
			id: 4,
			article: 2,
			raiting: 1,
			decription: "ASIC Miner для майнинга криптовалютных криптовалют",
			isExist: true,
			price: 183000,
		},
		{
			id: 5,
			article: 3,
			raiting: 2,
			decription:
				"ASIC Miner для майнинга криптовалюют df sdf  sfd fsd fsdf d fsdf ",
			isExist: true,
			price: 184000,
		},
		{
			id: 6,
			article: 3,
			raiting: 2,
			decription:
				"ASIC Miner для майнинга криптовалюют df sdf  sfd fsd fsdf d fsdf ",
			isExist: true,
			price: 184000,
		},
		{
			id: 7,
			article: 2,
			raiting: 1,
			decription: "ASIC Miner для майнинга криптовалютных криптовалют",
			isExist: true,
			price: 183000,
		},
		{
			id: 8,
			article: 3,
			raiting: 2,
			decription:
				"ASIC Miner для майнинга криптовалюют df sdf  sfd fsd fsdf d fsdf ",
			isExist: true,
			price: 184000,
		},
		{
			id: 9,
			article: 3,
			raiting: 2,
			decription:
				"ASIC Miner для майнинга криптовалюют df sdf  sfd fsd fsdf d fsdf ",
			isExist: true,
			price: 184000,
		},
	]);

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
