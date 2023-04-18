import { AiFillGithub, AiOutlineRocket } from "react-icons/ai";

const Project = ({ reverse, imgSrc, title, description, github, liveDemo }) => {
	return (
		<div
			className={`border-2 border-black flex flex-col items-center lg:items-stretch lg:gap-12 gap-5 ${reverse} lg:flex-row mx-auto p-5 rounded`}
		>
			<a href={liveDemo} target="_blank" rel="noreferrer">
				<img
					className=" w-[37rem] h-80 object-cover rounded shadow-gray-400 border-gray-400 border-2 shadow-md"
					src={imgSrc}
					alt="project website"
				/>
			</a>

			<div className="flex flex-col gap-1 justify-evenly items-center max-w-xs text-center">
				<p className="text-lg font-bold">{title}</p>
				<p className="text-zinc-600">{description}</p>
				<div className="flex gap-5 justify-center">
					<a href={github} target="_blank" rel="noreferrer">
						Code <AiFillGithub className="inline-block" />
					</a>
					<a href={liveDemo} target="_blank" rel="noreferrer">
						Live demo <AiOutlineRocket className="inline-block" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
