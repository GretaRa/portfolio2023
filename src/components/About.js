
const About = () => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center p-10 ">
			<div className="max-w-lg lg:max-w-2xl mx-auto rounded-customAbout border-2 bg-peach-100 p-20">
				<p className="text-2xl pb-10">About Me</p>
				<div className="flex flex-col gap-4 text-lg ">
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
		</div>
	);
};

export default About;
