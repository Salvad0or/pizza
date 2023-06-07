import React, { useState } from "react";
import style from "./Sort.module.css";

const Sort = () => {
	const [active, setActive] = useState(0);
	const sortItems = ["Цене", "Популярности", "Отзывам"];

	const changeActiveSort = (index) => {
		setActive(index);
	};

	return (
		<div className={style.sort}>
			<span className={style.sortDescribe}>Сортировать по:</span>

			<ul className={style.ulSort}>
				{sortItems.map((item, index) => (
					<li
						key={item}
						onClick={() => changeActiveSort(index)}
						className={active === index ? style.active : style.sortUl}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sort;
