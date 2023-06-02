import React from "react";
import style from "./MyInput.module.css";

const MyInput = (props) => {
	return (
		<div className={style.MyInputContainer}>
			<input {...props} className={style.myInput} />
			<button className={style.headerButton}>Поиск</button>
		</div>
	);
};

export default MyInput;
