import React from "react";
import style from "./GoodsContainer.module.css";

const GoodsContainer = () => {
	return (
		<div className={style.container}>
			<svg className={style.sprite}>
				<symbol id="heart" viewBox="0 0 32 32">
					<path d="M8.999 3.567c0.98 0 2.753 0.469 5.628 3.301l1.425 1.403 1.404-1.426c1.996-2.028 4.12-3.288 5.543-3.288 1.919 0 3.432 0.656 4.907 2.128 1.39 1.386 2.156 3.23 2.156 5.191 0.001 1.962-0.764 3.807-2.169 5.209-0.114 0.116-6.156 6.634-11.218 12.097-0.238 0.227-0.511 0.26-0.656 0.26-0.143 0-0.412-0.032-0.65-0.253-1.233-1.372-10.174-11.313-11.213-12.351-1.391-1.388-2.157-3.233-2.157-5.194s0.766-3.804 2.158-5.192c1.353-1.352 2.937-1.885 4.842-1.885zM8.999 1.567c-2.392 0-4.5 0.715-6.255 2.469-3.659 3.649-3.659 9.566 0 13.217 1.045 1.045 11.183 12.323 11.183 12.323 0.578 0.578 1.336 0.865 2.093 0.865s1.512-0.287 2.091-0.865c0 0 11.090-11.97 11.208-12.089 3.657-3.652 3.657-9.57 0-13.219-1.816-1.813-3.845-2.712-6.319-2.712-2.364 0-5 1.885-6.969 3.885-2.031-2-4.585-3.874-7.031-3.874v0z"></path>
				</symbol>
				<symbol id="analytics" viewBox="-1 0 24 24">
					<path
						d="M3 13C4.65685 13 6 14.3431 6 16V21C6 22.6569
						4.65685 24 3 24C1.34315 24 0 22.6569 0 21V16C0 
						14.3431 1.34315 13 3 13zM11 0C12.6569 0 14 1.34315 14 
						3V21C14 22.6569 12.6569 24 11 24C9.3431 24 8
							22.6569 8 21V3C8 1.34315 9.3431 0 11 0zM19 
							7C20.6569 7 22 8.34315 22 10V21C22 22.6569 
							20.6569 24 19 24C17.3431 24 16 22.6569 16 
							21V10C16 8.34315 17.3431 7 19 7z"
					/>
				</symbol>
			</svg>

			<div className={style.header}>
				<div className={style.article}>
					<span>Код : 12345</span>
				</div>
				<div className={style.icons}>
					<svg className={style.heartSvg}>
						<use href="#heart"></use>
					</svg>

					<svg className={style.analyticsSvg}>
						<use href="#analytics"></use>
					</svg>
				</div>
			</div>

			<div>
				<img
					className={style.goodsPhoto}
					alt="goods-photo"
					src="https://intelionmine.ru/upload/iblock/dc8/dc884ddb9d8596408c0282893c349ef0.jpg"
				/>
			</div>

			<div className={style.rating}>Рейтинг</div>

			<div className={style.description}>
				<span>ASIC Miner для майнинга криптовалютных криптовалют</span>
			</div>

			<div className={style.inStock}>
				<span>Есть в наличии</span>
			</div>

			<div className={style.price}>
				<span className={style.numerus}>183000Р</span>

				<img
					className={style.cart}
					src="https://i.pinimg.com/564x/cb/c5/24/cbc52492c8a9b9e707e0bb67b6363dda.jpg"
				></img>
			</div>
		</div>
	);
};

export default GoodsContainer;
