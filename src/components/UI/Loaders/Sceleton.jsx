import React from "react";
import ContentLoader from "react-content-loader";
import style from "./Sceleton.module.css";

const Sceleton = () => (
	<ContentLoader
		speed={2}
		width={235}
		height={445}
		viewBox="0 0 235 445"
		backgroundColor="#f3f3f3"
		foregroundColor="rgba(237, 236, 254, 1)"
		className={style.container}
	>
		<rect x="15" y="15" rx="0" ry="0" width="65" height="14" />
		<rect x="141" y="15" rx="0" ry="0" width="65" height="14" />
		<rect x="15" y="50" rx="0" ry="0" width="191" height="189" />
		<rect x="127" y="123" rx="0" ry="0" width="0" height="1" />
		<rect x="15" y="277" rx="0" ry="0" width="191" height="90" />
		<rect x="15" y="252" rx="0" ry="0" width="65" height="14" />
		<rect x="15" y="401" rx="0" ry="0" width="50" height="14" />
		<circle cx="191" cy="414" r="16" />
	</ContentLoader>
);

export default Sceleton;
