import Project from "./Project";
import memoryGame from "../images/memoryGame.png";
import weatherAppScreenshot from "../images/weatherapp.png";
import Fylo from "../images/fylo.png";

const ProjectsGrid = () => {
	return (
		<div>
			<p className="text-2xl lg:text-3xl p-5 text-center">My projects</p>
			<div className=" grid grid-cols-1 gap-10 m-5">
				{/* Pass prop reverse="lg:flex-row-reverse" to every other card  */}
				<Project
					imgSrc={Fylo}
					title={"FYLO LANDING PAGE"}
					description={
						"A landing page for a fictional company. Made using React and styled with Tailwind."
					}
					github={"https://github.com/GretaRa/fylo"}
					liveDemo={"https://gretara.github.io/fylo/"}
				/>
				<Project
					imgSrc={weatherAppScreenshot}
					title={"WEATHER APP"}
					description={
						"A weather app that shows the current weather and a 4-day forecast. Made with React and styled with Tailwind."
					}
					github={"https://github.com/GretaRa/weather-app"}
					liveDemo={"https://gretara.github.io/weather-app/"}
					reverse="lg:flex-row-reverse"
				/>
				<Project
					imgSrc={memoryGame}
					title={"MEMORY CARDS GAME"}
					description={
						"A simple memory game with cards featuring plant pictures. Made with React."
					}
					github={"https://github.com/GretaRa/memory-game"}
					liveDemo={"https://gretara.github.io/memory-game/"}
				/>
			</div>
		</div>
	);
};

export default ProjectsGrid;
