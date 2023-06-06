import React, { useState } from "react";
import style from "./Sort.module.css";

const Sort = () => {
	const [active, setActive] = useState(0);
	const sortItems = ["Цене", "Популярности", "Отзывам"];

	const changeActiveSort = (index) => {
		setActive(index);
	};

	return (
		<div className={style.container}>
			<div className={style.sort}>
				<span className={style.sortDescribe}>Сортировать по:</span>

				<ul className={style.sortLi}>
					{sortItems.map((item, index) => (
						<li
							onClick={() => changeActiveSort(index)}
							className={active === index ? style.active : style.sortUl}
						>
							{item}
						</li>
					))}
				</ul>

				{/* <ul className={style.sortLi}>
					<li
						onClick={() => changeActiveSort(0)}
						className={active === 0 ? style.active : style.sortUl}
					>
						Цене
					</li>
					<li
						onClick={() => changeActiveSort(1)}
						className={active === 1 ? style.active : style.sortUl}
					>
						Популярности
					</li>
					<li
						onClick={() => changeActiveSort(2)}
						className={active === 2 ? style.active : style.sortUl}
					>
						Отзывам
					</li>
				</ul> */}
			</div>
		</div>
	);
};

export default Sort;
