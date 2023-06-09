import React from "react";
import style from "./Cart.module.css";
import goodsPhoto from "../../assets/img/Photo.png";

const Cart = () => {
	return (
		<div>
			<h1 className={style.cart}>Корзина</h1>
			<div className={style.container}>
				<div className={style.leftSide}>
					<div className={style.cartGoodsPhoto}>
						<input className={style.checkBox} type="checkbox"></input>
						<img src={goodsPhoto} alt="Фото товара"></img>
					</div>
					<div className={style.cartDescription}>
						<div className={style.descriprionTop}>
							<div className={style.descriprionTopItems}>
								<span className={style.descriprionTopItemName}>Wd-40</span>
								<span className={style.descriprionTopItemArticle}>
									arricle 1-2
								</span>
							</div>
						</div>

						<span className={style.cartDescriptionMain}>
							Асикович асиков наасиковал асики и пришел асики делать
						</span>
					</div>
					<div className={style.cartPrice}>
						<span className={style.cartPiceSum}>614Р</span>
					</div>
					<div className={style.cartQuantity}></div>
					<div className={style.cartFinalSum}></div>
					<div className={style.cartUrn}></div>
					<div className={style.rightSide}></div>
				</div>
				<div className={style.rightSide}>Правая сторона</div>
			</div>
		</div>
	);
};

export default Cart;
