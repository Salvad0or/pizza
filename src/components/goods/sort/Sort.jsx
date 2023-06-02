import React from "react";
import style from "./Sort.module.css";

const Sort = () => {
	return (
		<div className={style.container}>
			<div className={style.sort}>
				<span className={style.sortSort}>Сортировать по:</span>
				<ul className={style.sortLi}>
					<li className={style.sortUl}>Цене</li>
					<li className={style.sortUl}>Популярности</li>
					<li className={style.sortUl}>Отзывам</li>
				</ul>
			</div>
		</div>
	);
};

export default Sort;
