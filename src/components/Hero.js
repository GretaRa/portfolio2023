import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineDownload,
} from "react-icons/ai";

const Hero = () => {
	return (
		<>
			<section className="border-y-2 border-black min-h-screen flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly gap-4 p-11 items-center text-3xl md:text-3xl lg:text-5xl ">
				<div>
					<p className="pb-3">Hi, I'm Greta</p>
					<p className="font-semibold ">Front-end developer</p>
					<span className="flex gap-4 mt-2">
						<a
							href="https://github.com/GretaRa"
							target={"_blank"}
							rel="noreferrer"
						>
							<AiFillGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/greta-rakauskaite/"
							target={"_blank"}
							rel="noreferrer"
						>
							<AiFillLinkedin />
						</a>
						<button className="bg-peach-200 px-2 rounded-lg text-2xl">
							Resume <AiOutlineDownload className="inline-block" />
						</button>
					</span>
				</div>
				<img
					className="lg:max-w-lg max-w-xs max-h border-black border-4"
					src="https://i.imgur.com/VrRcVOe.png"
					alt="girl coding in a a coffee shop"
				/>
			</section>
		</>
	);
};

export default Hero;
