import { AiFillGithub, AiOutlineRocket } from "react-icons/ai";

const Project = ({thing}) => {
	return (
		<div className={`border-2 border-black flex flex-col lg:gap-12 gap-5 ${thing} lg:flex-row mx-auto p-5 rounded`}>
			<img
				className="h-80 rounded object-cover"
				src="https://i.imgur.com/VrRcVOe.png"
				alt="girl coding in a a coffee shop"
			/>
			<div className="flex flex-col gap-1 justify-evenly items-center max-w-xs text-center">
				<p className="text-lg font-bold">TITLE</p>
				<p className="text-zinc-600">
					Description DescriptionDescription Description Descriptionv
					Description Description
				</p>
				<div>
					<a href="#">
						Code <AiFillGithub className="inline-block" />
					</a>
					<a href="#">
						Live demo <AiOutlineRocket className="inline-block" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
