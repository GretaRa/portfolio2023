import Project from "./Project";
import portfolioScreenshot from "../images/portfolioscreenshot.png";
import weatherAppScreenshot from "../images/weatherapp.png";
import rockPaperScissorsScreenshot from "../images/rockPaperScissors.png"

const ProjectsGrid = () => {
	return (
		<div>
			<p className="text-2xl p-5 text-center">Projects</p>
			<div className=" grid grid-cols-1 gap-10 m-5">
				{/* Pass prop reverse="lg:flex-row-reverse" to every other card  */}
				<Project
					imgSrc={portfolioScreenshot}
					title={"PORTFOLIO"}
					description={
						"My personal portfolio website to introduce myself and show off my projects."
					}
					github={"https://github.com/GretaRa/portfolio2023"}
					liveDemo={"https://gretara.github.io/portfolio2023/"}
				/>
				<Project
					reverse="lg:flex-row-reverse"
					imgSrc={weatherAppScreenshot}
					title={"WEATHER FORECAST"}
					description={
						"A website for looking up a locations weather forecast. Data displayed from OpenWeather API."
					}
					github={"https://github.com/GretaRa/weather-app"}
					liveDemo={"https://gretara.github.io/weather-app/"}
				/>
				<Project
					imgSrc={rockPaperScissorsScreenshot}
					title={"ROCK PAPER SCISSORS"}
					description={
						"A rock paper scissors game against a computer. Made with vanilla JavaScript."
					}
					github={"https://github.com/GretaRa/RockPaperScissors"}
					liveDemo={"https://gretara.github.io/RockPaperScissors/"}
				/>
			</div>
		</div>
	);
};

export default ProjectsGrid;
