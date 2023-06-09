import GoodsAfterSearch from "./components/goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";
import Header from "./components/header/Header";
import LeftNavigationAfterSearch from "./components/leftnavigation/afterSearch/LeftNavigationAfterSearch";
import style from "./styles/App.module.css";
import "../src/index";
import Cart from "./components/cart/Cart";
import RouteNavigation from "./components/Routes/RouteNavigation";

import Error from "./components/Errors/Error";
import { NavLink, Route, Routes } from "react-router-dom";
import PageAfterSearch from "./components/Pages/PageAfterSearch";

function App() {
	return (
		<div>
			<Header />

			<div className={style.container}>
				<Routes>
					<Route path="/cart" element={<Cart />} />
					<Route path="/search" element={<PageAfterSearch />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
