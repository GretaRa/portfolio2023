import Project from "./Project";

const ProjectsGrid = () => {
	const projectList = [
		{
			id: 1,
			title: "Fashionhub",
			src: require("../images/fashionhub.png"),
			description:
				"A simple yet functional online store developed with React.js and styled using Tailwind CSS. It sources product data from the FakeStore API, providing a clean and efficient shopping experience.",
			github: "https://github.com/GretaRa/FashionHub",
			demoUrl: "https://fashion-hub-project.vercel.app/",
		},
		{
			id: 2,
			title: "Weather app",
			src: require("../images/weatherapp.png"),
			description:
				"Web app for visualizing the current weather of a city. It fetches weather data from OpenWeatherMap API and can show current weather based on the user's input or location. Utilizes API integration and Webpack module bundling.",
			github: "https://github.com/GretaRa/weather-app",
			demoUrl: "https://gretara.github.io/weather-app/",
		},
		{
			id: 3,
			title:"Fylo landing page",
			src: require("../images/fylo.png"),
			description:
				"The end product of a front-end challenge that entailed reproducing a specific design for a fictional company's landing page. Built using React and styled with Tailwind.",
			github: "https://github.com/GretaRa/fylo",
			demoUrl: "https://gretara.github.io/fylo/",
		},
		{
			id: 4,
			title:"Memory card game",
			src: require("../images/memorygame.png"),
			description:
			"A simple memory game with cards featuring plant pictures. Made with React.",
			github: "https://github.com/GretaRa/memory-game",
			demoUrl: "https://gretara.github.io/memory-game/",
		},
	];

	return (
		<div>
			<p className="text-2xl lg:text-3xl p-5 text-center">My projects</p>
			<div className=" grid grid-cols-1 gap-10 m-5">
				{projectList.map((project) => (
					<Project 
					style={project.id % 2 === 0 ?  'lg:flex-row-reverse' : 'lg:flex-row'}
					key={project.id}
					imgSrc={project.src} 
					title={project.title}
					description={project.description}
					github={project.github}
					liveDemo={project.demoUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectsGrid;
