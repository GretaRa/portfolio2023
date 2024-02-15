import { AiFillMail } from "react-icons/ai";
import { GithubIcon, LinkedInIcon } from "./Icons";

const Footer = () => {
	return (
		<footer className="flex flex-col bg-peach-100 border-t-2 border-black p-3 justify-center items-center gap-3 text-sm md:text-lg">
			<ul className="flex gap-4 items-center">
				<li>
					<GithubIcon
						url={"https://github.com/GretaRa"}
						iconStyle={"inline-block lg:text-3xl text-2xl"}
					/>
				</li>
				<li>
					<LinkedInIcon
						url={"https://www.linkedin.com/in/greta-rakauskaite/"}
						iconStyle={"inline-block lg:text-3xl text-2xl"}
					/>
				</li>
				<li>
					<a type="email" href="mailto:greta.rakauskaite0@gmail.com">
						<AiFillMail className="inline-block lg:text-3xl text-2xl" />
					</a>
				</li>
			</ul>
			Designed and coded by Greta Rakauskaite 2023
		</footer>
	);
};

export default Footer;
