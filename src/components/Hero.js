import {
	AiFillGithub,
	AiFillLinkedin,
	AiOutlineDownload,
} from "react-icons/ai";
import Skills from "./Skills";
import resume from "../documents/Greta_Rakauskaite_Resume.pdf";

const Hero = () => {
	const onResumeClick = () => {
		window.open(resume);
	};

	return (
		<div className="mt-10 lg:mb-40 mb-10">
			<section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly gap-4 p-11 items-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
				<div>
					<p className="pb-3 cursor-default">Hi, I'm Greta</p>
					<p className="cursor-default font-semibold hover:text-peach-300 transform duration-300 ease-in-out">
						Front-end developer
					</p>
					<span className="flex gap-4 mt-2 items-center">
						<a
							href="https://github.com/GretaRa"
							target={"_blank"}
							rel="noreferrer"
						>
							<AiFillGithub className="transform hover:scale-125 duration-200 ease-in-out" />
						</a>
						<a
							href="https://www.linkedin.com/in/greta-rakauskaite/"
							target={"_blank"}
							rel="noreferrer"
						>
							<AiFillLinkedin className="transform hover:scale-125 duration-200 ease-in-out" />
						</a>
						<button
							onClick={onResumeClick}
							className="bg-peach-200 px-2 rounded-lg text-xl lg:text-3xl border-black border-2 transform hover:scale-105 duration-200 ease-in-out"
						>
							Resume <AiOutlineDownload className="inline-block" />
						</button>
					</span>
				</div>
				<img
					className="xl:max-w-lg lg:max-w-md max-w-xs max-h border-black border-4 rounded-customHero hover:rounded-customHeroHover ease-in-out duration-500"
					src="https://i.imgur.com/VrRcVOe.png"
					alt="girl coding in a a coffee shop"
				/>
			</section>
			<Skills />
		</div>
	);
};

export default Hero;
