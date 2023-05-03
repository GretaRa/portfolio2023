
const About = () => {
	return (
		<div className="text-center p-10">
			<div className="max-w-lg lg:max-w-2xl mx-auto min-h-screen">
				<p className="text-xl pb-10 underline underline-offset-4">About Me</p>
				<div className="flex flex-col gap-4 text-xl">
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
