import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const GithubIcon = ({ url, text, linkStyle, iconStyle }) => {
	return (
		<a href={url} target={"_blank"} rel="noreferrer" className={linkStyle}>
			{text}
			<AiFillGithub className={iconStyle} />
		</a>
	);
};

export const LinkedInIcon = ({ url, iconStyle }) => {
	return (
		<a href={url} target={"_blank"} rel="noreferrer">
			<AiFillLinkedin className={iconStyle} />
		</a>
	);
};
