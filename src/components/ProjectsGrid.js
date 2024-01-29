import Project from "./Project";
import memorygame from "../images/memorygame.png";
import weatherAppScreenshot from "../images/weatherapp.png";
import Fylo from "../images/fylo.png";
import fashionhub from "../images/fashionhub.png";

const ProjectsGrid = () => {
	return (
		<div>
			<p className="text-2xl lg:text-3xl p-5 text-center">My projects</p>
			<div className=" grid grid-cols-1 gap-10 m-5">
				{/* Pass prop reverse="lg:flex-row-reverse" to every other card  */}
				<Project
					imgSrc={fashionhub}
					title={"fashionhub"}
					description={
						"A simple yet functional online store developed with React.js and styled using Tailwind CSS. It sources product data from the FakeStore API, providing a clean and efficient shopping experience."
					}
					github={"https://github.com/GretaRa/FashionHub"}
					liveDemo={"https://fashion-hub-project.vercel.app/"}
				/>
				<Project
					imgSrc={weatherAppScreenshot}
					title={"weather app"}
					description={
						"Web app for visualizing the current weather of a city. It fetches weather data from OpenWeatherMap API and can show current weather based on the user's input or location. Utilizes API integration and Webpack module bundling."
					}
					github={"https://github.com/GretaRa/weather-app"}
					liveDemo={"https://gretara.github.io/weather-app/"}
					reverse="lg:flex-row-reverse"
				/>
				<Project
					imgSrc={Fylo}
					title={"fylo landing page"}
					description={
						"The end product of a front-end challenge that entailed reproducing a specific design for a fictional company's landing page. Built using React and styled with Tailwind."
					}
					github={"https://github.com/GretaRa/fylo"}
					liveDemo={"https://gretara.github.io/fylo/"}
				/>
				<Project
					imgSrc={memorygame}
					title={"memory card game"}
					description={
						"A simple memory game with cards featuring plant pictures. Made with React."
					}
					github={"https://github.com/GretaRa/memory-game"}
					liveDemo={"https://gretara.github.io/memory-game/"}
					reverse="lg:flex-row-reverse"
				/>
			</div>
		</div>
	);
};

export default ProjectsGrid;
