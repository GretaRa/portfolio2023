import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="flex flex-col bg-peach-100 border-t-2 border-black p-3 justify-center items-center gap-3 text-sm lg:text-lg">
			<div className="flex gap-4 items-center">
				<a href="https://github.com/GretaRa" target="blank">
					
					<AiFillGithub className="inline-block lg:text-3xl text-2xl hover:-translate-y-2 ease-in-out duration-300" />
				</a>
				<a
					href="https://www.linkedin.com/in/greta-rakauskaite/"
					target={"_blank"}
					rel="noreferrer"
				>
					<AiFillLinkedin className="inline-block lg:text-3xl text-2xl hover:-translate-y-2 ease-in-out duration-300" />
				</a>
				<a type="email" href="mailto:greta.rakauskaite0@gmail.com">
					<AiFillMail className="inline-block lg:text-3xl text-2xl hover:-translate-y-2 ease-in-out duration-300" />
				</a>
			</div>
			Designed and coded by Greta Rakauskaite 2023
		</div>
	);
};

export default Footer;
