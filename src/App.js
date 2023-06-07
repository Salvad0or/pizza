import GoodsAfterSearch from "./components/goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";
import Header from "./components/header/Header";
import LeftNavigationAfterSearch from "./components/leftnavigation/afterSearch/LeftNavigationAfterSearch";
import style from "./styles/App.module.css";

function App() {
	return (
		<div>
			<Header />

			<div className={style.container}>
				<LeftNavigationAfterSearch className={style.navigation} />
				<GoodsAfterSearch className={style.goods} />
			</div>
		</div>
	);
}

export default App;
