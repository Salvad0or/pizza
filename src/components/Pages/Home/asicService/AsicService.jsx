import React from "react";
import style from "./AsicService.module.css";

const AsicService = () => {
	return (
		<div className={style.container}>
			<div className={style.leftSide}>
				<span className={style.description}>
					Сервис по ремонту Asic оборудования
				</span>
				<div className={style.advantages}>
					<div className={style.advantagesDescription}>
						<div className={style.advantageImg}></div>
						<div>
							<span className={style.advantageText1}>Только профессионалы</span>
							<span className={style.advantageText2}>
								Наши специалисты имеют более 3 лет опыта работы
							</span>
						</div>
					</div>
					<div className={style.advantagesDescription}>
						<div className={style.advantageImg}></div>
						<div>
							<span className={style.advantageText1}>Только профессионалы</span>
							<span className={style.advantageText2}>
								Наши специалисты имеют более 3 лет опыта работы
							</span>
						</div>
					</div>
					<div className={style.advantagesDescription}>
						<div className={style.advantageImg}></div>
						<div>
							<span className={style.advantageText1}>Только профессионалы</span>
							<span className={style.advantageText2}>
								Наши специалисты имеют более 3 лет опыта работы
							</span>
						</div>
					</div>
					<div className={style.advantagesDescription}>
						<div className={style.advantageImg}></div>
						<div>
							<span className={style.advantageText1}>Только профессионалы</span>
							<span className={style.advantageText2}>
								Наши специалисты имеют более 3 лет опыта работы
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className={style.rightSide}></div>
		</div>
	);
};

export default AsicService;
