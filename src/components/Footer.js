import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
	return (
		<footer className="flex flex-col bg-peach-100 border-t-2 border-black p-3 justify-center items-center gap-3 text-sm md:text-lg">
			<ul className="flex gap-4 items-center">
				<li>
					<a href="https://github.com/GretaRa" target="blank">
						<AiFillGithub className="inline-block lg:text-3xl text-2xl hover:-translate-y-1 ease-in-out duration-300" />
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/greta-rakauskaite/"
						target={"_blank"}
						rel="noreferrer"
					>
						<AiFillLinkedin className="inline-block lg:text-3xl text-2xl hover:-translate-y-1 ease-in-out duration-300" />
					</a>
				</li>
				<li>
					<a type="email" href="mailto:greta.rakauskaite0@gmail.com">
						<AiFillMail className="inline-block lg:text-3xl text-2xl hover:-translate-y-1 ease-in-out duration-300" />
					</a>
				</li>
			</ul>
			Designed and coded by Greta Rakauskaite 2023
		</footer>
	);
};

export default Footer;
