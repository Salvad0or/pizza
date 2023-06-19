import React from "react";
import style from "./Cart.module.css";
import goodsPhoto from "../../assets/img/Photo.png";
import { useSelector } from "react-redux";

const Cart = () => {
	const goodsInCart = useSelector((state) => state.addToCartSlice.goodsInCart);

	console.log(goodsInCart);

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

					<div className={style.cartQuantity}>
						<button className={style.quantityMinus}>-</button>
						<input className={style.quantityInput}></input>
						<button className={style.quantityPlus}>+</button>
					</div>

					<div className={style.cartFinalSum}>614Р</div>

					<div className={style.cartSvg}>
						<svg className={style.sprite}>
							<symbol id="garbage" viewBox="0 0 50 50">
								<path
									d="M21 0C19.355469 0 18 1.355469 18 3L18 4L9.6875 4C8.453125
																4 7.375 4.847656 6.96875 6C4.808594 6.070313 3.066406
																7.847656 3 10.0625C3.035156 10.585938 3.46875 11 4 11L46
																11C46.53125 11 46.96875 10.585938 47 10.0625C46.933594 
																7.847656 45.191406 6.070313 43.03125 6C42.625 4.847656 
																41.546875 4 40.3125 4L32 4L32 3C32 1.355469 30.644531
																	0 29 0 Z M 21 2L29 2C29.554688 2 30 2.445313 30 3L30 4L20
																	4L20 3C20 2.445313 20.445313 2 21 2 Z M 5.28125 13L10.21875 
																	46.75C10.488281 48.636719 12.074219 50 14 50L36 50C37.851563 
																	50 39.359375 48.722656 39.78125 46.75L44.71875 13 Z M 12.28125 
																	16.3125C12.828125 16.246094 13.332031 16.609375 13.40625 17.15625L16.6875 
																	42.0625C16.757813 42.609375 16.390625 43.117188 15.84375 43.1875C15.800781
																	43.195313 15.730469 43.1875 15.6875 43.1875C15.195313 43.1875 14.785156
																	42.847656 14.71875 42.34375L11.40625 17.4375C11.332031 16.890625 11.734375 
																	16.386719 12.28125 16.3125 Z M 20.75 16.3125C21.277344 16.285156 21.789063 
																	16.695313 21.8125 17.25L22.90625 42.15625C22.929688 42.707031 22.488281 
																	43.164063 21.9375 43.1875C21.921875 43.1875 21.921875 43.1875 21.90625 
																	43.1875C21.375 43.1875 20.929688 42.785156 20.90625 42.25L19.8125 17.34375C19.789063 
																	16.792969 20.199219 16.335938 20.75 16.3125 Z M 29.25 16.3125C29.800781 16.335938
																		30.210938 16.792969 30.1875 17.34375L29.09375 42.25C29.070313 42.785156 28.625
																		43.1875 28.09375 43.1875C28.078125 43.1875 28.078125 43.1875 28.0625 
																		43.1875C27.511719 43.164063 27.070313 42.707031 27.09375 42.15625L28.1875
																		17.25C28.210938 16.699219 28.707031 16.300781 29.25 16.3125 Z M 37.71875 
																		16.3125C38.265625 16.382813 38.667969 16.890625 38.59375 17.4375L35.28125
																		42.34375C35.214844 42.847656
																			34.804688 43.1875 34.3125 43.1875C34.269531 43.1875 
																			34.203125 43.195313 34.15625 43.1875C33.609375 43.117188 
																			33.238281 42.609375 33.3125 42.0625L36.59375 17.15625C36.664063 
																			16.609375 37.167969 16.242188 37.71875 16.3125Z"
								/>
							</symbol>
						</svg>

						<svg className={style.svg}>
							<use href="#garbage"></use>
						</svg>
					</div>
				</div>
				<div className={style.rightSide}>
					<div className={style.rightSideText}>
						<span className={style.rightSideTextItog}>Итого : </span>
						<span className={style.rightSideTextFinalSum}>614Р</span>
					</div>

					<div className={style.rightSideMiddleText}>
						<span className={style.rightSideMiddleText}>Выбрано товаров: </span>
						<span className={style.rightSideMiddleTextFinalCount}>1 шт</span>
					</div>

					<input
						placeholder="Введите промокод"
						className={style.rightSideInput}
					/>

					<button className={style.rightSideButton}>Оформить заказ</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
