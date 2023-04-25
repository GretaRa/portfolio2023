import { Link } from "react-scroll";

const Header = () => {
	return (
		<>
			<header className="bg-peach-100 p-5 border-b-2 border-black">
				<nav>
					<ul className="flex justify-end content-center gap-10 mr-10 text-lg lg:text-xl ">
						<li className="transform hover:scale-125 duration-300 ease-in-out cursor-pointer">
						<Link activeClass="active" smooth spy to="home">
                Home
              </Link>
						</li>
						<li className="transform hover:scale-125 duration-300 ease-in-out cursor-pointer">
						<Link activeClass="active" smooth spy to="about">
                About
              </Link>
						</li>
						<li className="transform hover:scale-125 duration-300 ease-in-out cursor-pointer">
						<Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
