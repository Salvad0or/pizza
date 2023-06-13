import Header from "./components/header/Header";
import style from "./styles/App.module.css";
import "../src/index";
import RouteNavigation from "./components/Routes/RouteNavigation";
import { useSelector, useDispatch } from "react-redux";
import { increace } from "./redux/slices/filterSlice";

function App() {
	const count = useSelector((state) => state.filterSlice.value);
	const dispatch = useDispatch();

	console.log(increace());

	return (
		<div>
			<button onClick={() => dispatch(increace())}>;vfnm</button>
			<span>{count}</span>
		</div>
		// <div className={style.container}>
		// 	<div>
		// 		<span></span>
		// 	</div>
		// 	{/* <Header />
		// 	<RouteNavigation /> */}
		// </div>
	);
}

export default App;
