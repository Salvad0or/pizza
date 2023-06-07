import GoodsAfterSearch from "./components/goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";
import Header from "./components/header/Header";
import LeftNavigationAfterSearch from "./components/leftnavigation/afterSearch/LeftNavigationAfterSearch";
import style from "./styles/App.module.css";
import "../src/index";
import Sort from "./components/goods/sort/Sort";

function App() {
	return (
		<div>
			<Header />

			<div className="container">
				<div className={style.content}>
					<LeftNavigationAfterSearch />
					<GoodsAfterSearch />
				</div>
			</div>
		</div>
	);
}

export default App;
