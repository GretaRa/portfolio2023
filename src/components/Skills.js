import {
	SiWebpack,
	SiHtml5,
	SiTailwindcss,
	SiCss3,
	SiJavascript,
	SiReact,
} from "react-icons/si";

const Skills = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center lg:mx-[15%] justify-start gap-5 lg:gap-16">
			<span className="text-xl">Tech&nbsp;stack&nbsp;|</span>
			<div className="grid grid-cols-3 lg:flex justify-start items-center xl:gap-16 lg:gap-8 gap-5 lg:text-xl ">
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
	);
};

export default Skills;
