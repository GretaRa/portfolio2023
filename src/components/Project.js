import { AiFillGithub, AiOutlineRocket } from "react-icons/ai";

const Project = ({ imgSrc, title, description, github, liveDemo, style }) => {
	return (
		<div
			className={`${style} border-2 border-black flex flex-col items-center lg:items-stretch lg:gap-12 gap-5  lg:flex-row mx-auto p-5 rounded`}
		>
			<a href={liveDemo} target="_blank" rel="noreferrer">
				<img
					className=" w-[37rem] max-h-80 md:h-80 object-cover rounded shadow-gray-400 border-gray-400 border-2 shadow-md hover:scale-105 ease-in-out duration-1000 object-top hover:object-bottom"
					src={imgSrc}
					alt="project website screenshot"
				/>
			</a>
			<div className="flex flex-col gap-1 justify-evenly max-w-xs text-center">
				<p className="text-lg font-bold">{title}</p>
				<p className="text-zinc-600">{description}</p>
				<div className="flex gap-5 justify-center text-lg items-center">
					<a
						href={github}
						target="_blank"
						rel="noreferrer"
						className="hover:text-peach-300"
					>
						Code <AiFillGithub className="inline-block text-2xl" />
					</a>
					<a
						href={liveDemo}
						target="_blank"
						rel="noreferrer"
						className="hover:text-peach-300"
					>
						Live demo <AiOutlineRocket className="inline-block text-2xl" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
