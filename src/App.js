import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import ProjectsGrid from "./components/ProjectsGrid";

function App() {
	return (
		<div>
			<section id="header">
				<Header />
			</section>
			<section id="home">
				<Hero />
			</section>
			<section id="projects">
				<ProjectsGrid />
			</section>
			<ScrollTop />
			<Footer />
		</div>
	);
}

export default App;
