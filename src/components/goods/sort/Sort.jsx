import React, { useState } from "react";
import style from "./Sort.module.css";
import { useSelector } from "react-redux";

const Sort = ({ changeSortItem }) => {
	const [active, setActive] = useState(0);

	const sortItems = useSelector((state) => state.sortSlice.sort);

	const changeActiveSort = (index, sortType) => {
		setActive(index);
		changeSortItem(sortType);
	};

	return (
		<div className={style.sort}>
			<span className={style.sortDescribe}>Сортировать по:</span>

			<ul className={style.ulSort}>
				{sortItems.map((item, index) => (
					<li
						key={item}
						onClick={() => changeActiveSort(index, item.sortType)}
						className={active === index ? style.active : style.sortUl}
					>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sort;
