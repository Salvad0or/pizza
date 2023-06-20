import { useState } from "react";
import style from "./MainPageSlider.module.css";

const MainPageSlider = ({ children }) => {
	const PAGE_WIDTH = 988;
	const [offset, setOffset] = useState(0);

	const turnLeft = () => {
		setOffset((currentOffset) => {
			const newOffset = currentOffset + PAGE_WIDTH;
			console.log(newOffset);
			return Math.min(newOffset, 0); // здесь в будущем нужно доделать логику, что бы крутиться назад в зависимости от кол-ва слайдов.
		});
	};

	const turnRight = () => {
		setOffset((currentOffset) => {
			let newOffset = currentOffset - PAGE_WIDTH;
			console.log(newOffset);
			if (newOffset < -1976) {
				newOffset = -1976;
			}
			return newOffset; // здесь в будущем нужно доделать логику, что бы крутиться вперед в зависимости от кол-ва слайдов.
		});
	};

	return (
		<div className={style.container}>
			<svg className={style.sprite}>
				<symbol id="left" viewBox="0 0 96 96">
					<path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
				</symbol>

				<symbol id="right" viewBox="0 0 96 96">
					<path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
				</symbol>
			</svg>

			<div className={style.mainWindow}>
				<div
					className={style.allPhotos}
					style={{
						transform: `translateX(${offset}px)`,
					}}
				>
					{children}
				</div>
			</div>

			<svg className={style.svg1} onClick={() => turnLeft(offset)}>
				<use href="#left"></use>
			</svg>
			<svg className={style.svg2} onClick={() => turnRight(offset)}>
				<use href="#right"></use>
			</svg>
		</div>
	);
};

export default MainPageSlider;
