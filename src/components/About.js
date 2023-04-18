import {
	SiWebpack,
	SiHtml5,
	SiTailwindcss,
	SiCss3,
	SiJavascript,
	SiReact,
} from "react-icons/si";

const About = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center p-10 bg-peach-100 border-b-2 border-black">
			<div className="max-w-lg lg:max-w-2xl mx-auto">
				<p className="text-2xl pb-10">About Me</p>
				<div className="flex flex-col gap-4 text-lg">
					<p>
						I am a self taught front-end developer based in The Netherlands. I
						enjoy solving real-world problems with clean and maintainable code.
					</p>
					<p className="hidden lg:block">
						My interest in web development sparked in early 2022, and since
						then, I've made significant progress. I've learned to create
						responsive, interactive websites, built several exciting projects,
						and mastered development tools such as React.
					</p>
					<p className="hidden lg:block">
						When I'm not immersed in code, I enjoy spending time in my garden or
						exploring new worlds in video games.
					</p>
				</div>
			</div>
			<div>
				<p className="text-2xl pb-10">My skills</p>
				<div className="grid grid-cols-3 gap-5 lg:text-lg">
					<p className="flex flex-col items-center transform hover:scale-125 duration-500 ease-in-out">
						<SiHtml5 className="inline-block text-5xl" /> Html5
					</p>
					<p className="flex flex-col items-center transform hover:scale-125 duration-500 ease-in-out">
						<SiCss3 className="inline-block text-5xl" /> CSS3
					</p>
					<p className="flex flex-col items-center transform hover:scale-125 duration-500 ease-in-out">
						<SiJavascript className="inline-block text-5xl" /> JavaScript (ES6)
					</p>
					<p className="flex flex-col items-center transform hover:scale-125 duration-500 ease-in-out">
						<SiReact className="inline-block text-5xl" /> React
					</p>
					<p className="flex flex-col items-center transform hover:scale-125 duration-500 ease-in-out">
						<SiTailwindcss className="inline-block text-5xl" />
						Tailwind
					</p>
					<p className="flex flex-col items-center transform hover:scale-125 duration-500 ease-in-out">
						<SiWebpack className="inline-block text-5xl" />
						Webpack
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
