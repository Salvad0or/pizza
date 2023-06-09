import Header from "./components/header/Header";
import style from "./styles/App.module.css";
import "../src/index";
import RouteNavigation from "./components/Routes/RouteNavigation";

function App() {
	return (
		<div>
			<Header />
			<div className={style.container}>
				<RouteNavigation />
			</div>
		</div>
	);
}

export default App;
