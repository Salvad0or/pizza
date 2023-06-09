import GoodsAfterSearch from "./components/goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";
import Header from "./components/header/Header";
import LeftNavigationAfterSearch from "./components/leftnavigation/afterSearch/LeftNavigationAfterSearch";
import style from "./styles/App.module.css";
import "../src/index";
import Cart from "./components/cart/Cart";

function App() {
	return (
		<div className={style.content}>
			<div>
				<Cart />
			</div>
			{/* <div className={style.header}>
				<Header />
			</div>

			<LeftNavigationAfterSearch className={style.leftMenu} />
			<GoodsAfterSearch className={style.goods} /> */}
		</div>
	);
}

export default App;
