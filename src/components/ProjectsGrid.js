import Project from "./Project";
import memoryGame from "../images/memoryGame.png";
import weatherAppScreenshot from "../images/weatherapp.png";
import rockPaperScissorsScreenshot from "../images/rockPaperScissors.png";
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
						"A landing page for a fictional company. Made using React and Tailwind."
					}
					github={"https://github.com/GretaRa/fylo"}
					liveDemo={"https://gretara.github.io/fylo/"}
				/>
				<Project
					imgSrc={memoryGame}
					title={"MEMORY CARDS GAME"}
					description={
						"A simple memory game with cards featuring plant pictures. The game is made with React as a part of The Odin Project curriculum."
					}
					github={"https://github.com/GretaRa/memory-game"}
					liveDemo={"https://gretara.github.io/memory-game/"}
					reverse="lg:flex-row-reverse"
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
