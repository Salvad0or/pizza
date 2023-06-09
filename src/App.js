import GoodsAfterSearch from "./components/goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";
import Header from "./components/header/Header";
import LeftNavigationAfterSearch from "./components/leftnavigation/afterSearch/LeftNavigationAfterSearch";
import style from "./styles/App.module.css";
import "../src/index";
import Cart from "./components/cart/Cart";
import RouteNavigation from "./components/Routes/RouteNavigation";

import Error from "./components/Errors/Error";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className={style.content}>
			<div className={style.header}>
				<Header />
			</div>
			<LeftNavigationAfterSearch className={style.leftMenu} />
			<GoodsAfterSearch className={style.goods} />

			<Routes>
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<Error />} />
			</Routes>
			{/* <RouteNavigation></RouteNavigation> */}
		</div>
	);
}

export default App;
