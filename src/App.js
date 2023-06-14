import Header from "./components/header/Header";
import style from "./styles/App.module.css";
import "../src/index";
import RouteNavigation from "./components/Routes/RouteNavigation";
import { useSelector, useDispatch } from "react-redux";

function App() {
	return (
		<div className={style.container}>
			<Header />
			<RouteNavigation />
		</div>
	);
}

export default App;
