import GoodsAfterSearch from "./components/goods/goodsAfterSearch/goodsAfterSearch/GoodsAfterSearch";
import Header from "./components/header/Header";
import style from "./styles/App.module.css";

function App() {
	return (
		<div className={style.container}>
			<Header />
			<GoodsAfterSearch />
		</div>
	);
}

export default App;
