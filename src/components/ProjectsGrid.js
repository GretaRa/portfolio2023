import Project from "./Project";
import memoryGame from "../images/memoryGame.png";
import weatherAppScreenshot from "../images/weatherapp.png";
import rockPaperScissorsScreenshot from "../images/rockPaperScissors.png";

const ProjectsGrid = () => {
	return (
		<div>
			<p className="text-2xl p-5 text-center">Projects</p>
			<div className=" grid grid-cols-1 gap-10 m-5">
				{/* Pass prop reverse="lg:flex-row-reverse" to every other card  */}
				<Project
					imgSrc={memoryGame}
					title={"MEMORY CARDS GAME"}
					description={
						"A simple memory game with cards featuring plant pictures. The game is made with React as a part of The Odin Project curriculum."
					}
					github={"https://github.com/GretaRa/memory-game"}
					liveDemo={"https://gretara.github.io/memory-game/"}
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
				<p className="text-center text-2xl mb-10">
					Check out more projects on{" "}
					<a
						href="https://github.com/GretaRa"
						target={"_blank"}
						rel="noreferrer"
						className="hover:text-peach-300 text-3xl"
					>
						Github!
					</a>
				</p>
			</div>
		</div>
	);
};

export default ProjectsGrid;
