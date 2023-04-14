import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="bg-peach-100 border-t-2 border-black p-3 flex justify-center items-center gap-3 text-sm lg:text-lg">
			Designed and coded by Greta Rakauskaite 2023
			<a href="https://github.com/GretaRa" target="blank">
				<AiFillGithub className="inline-block lg:text-3xl text-2xl" />
			</a>
		</div>
	);
};

export default Footer;
