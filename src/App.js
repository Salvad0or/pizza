import GoodsAfterSearch from "./components/goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";
import Header from "./components/header/Header";
import LeftNavigationAfterSearch from "./components/leftnavigation/afterSearch/LeftNavigationAfterSearch";
import style from "./styles/App.module.css";
import "../src/index";

function App() {
	return (
		<div className={style.content}>
			<div className={style.header}>Ntrcn</div>
			{/* <Header className={style.header} /> */}
			<LeftNavigationAfterSearch className={style.leftMenu} />
			<GoodsAfterSearch className={style.goods} />
		</div>
	);
}

export default App;
