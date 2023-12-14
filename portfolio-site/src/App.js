import "./App.css";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Intro } from "./Intro";

function Layout() {
	return (
		<div
			id="site-container"
			className="min-h-screen grid grid-rows-[0.3fr_2fr_1fr]"
		>
			<Header></Header>
			<main>
				<Hero></Hero>
				<div className="divider">-</div>
				<Intro></Intro>
			</main>
			<footer></footer>
		</div>
	);
}

function App() {
	return <Layout></Layout>;
}

export default App;
