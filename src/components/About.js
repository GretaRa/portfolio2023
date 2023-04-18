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
			<div className="max-w-lg mx-auto">
				<p className="text-2xl pb-10">About Me</p>
				<p>
					I am a self taught front-end developer based in The Netherlands. I
					enjoy solving real-world problems with clean and maintainable code.
				</p>
				<p className="hidden lg:block">
					My interest in web development started in early 2022. Since then, I
					have done quite a lot, including teaching myself web development and
					its best practices, building several fun and exciting projects, and
					finding easy-to-understand solutions.
				</p>
				<p className="hidden lg:block">
					Apart from that, I love spending time in nature, watching popular
					movies and playing some video games.
				</p>
			</div>
			<div>
				<p className="text-2xl pb-10">My skills</p>
				<div className="grid grid-cols-3 gap-5 lg:text-lg">
					<p className="flex flex-col items-center">
						<SiHtml5 className="inline-block text-5xl" /> Html5
					</p>
					<p className="flex flex-col items-center">
						<SiCss3 className="inline-block text-5xl" /> CSS3
					</p>
					<p className="flex flex-col items-center">
						<SiJavascript className="inline-block text-5xl" /> JavaScript (ES6)
					</p>
					<p className="flex flex-col items-center">
						<SiReact className="inline-block text-5xl" /> React
					</p>
					<p className="flex flex-col items-center">
						<SiTailwindcss className="inline-block text-5xl" />
						Tailwind
					</p>
					<p className="flex flex-col items-center">
						<SiWebpack className="inline-block text-5xl" />
						Webpack
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
