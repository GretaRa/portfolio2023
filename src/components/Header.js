import { Link } from "react-scroll";

const Header = () => {
	return (
		<>
			<nav className="bg-peach-100 p-5 border-b-2 border-black">
					<ul className="flex md:justify-end justify-center content-center gap-10 mr-10 text-lg lg:text-xl ">
						<li className="transform hover:scale-125 duration-300 ease-in-out cursor-pointer">
							<Link activeClass="active" smooth spy to="hero">
								Home
							</Link>
						</li>
						<li className="transform hover:scale-125 duration-300 ease-in-out cursor-pointer">
							<Link activeClass="active" smooth spy to="projects">
								Projects
							</Link>
						</li>
					</ul>
			</nav>
		</>
	);
};

export default Header;
