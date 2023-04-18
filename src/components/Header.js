const Header = () => {
	return (
		<>
			<header className="bg-peach-100 p-5 border-peach-200">
				<nav>
					<ul className="flex justify-end content-center gap-10 mr-10 text-lg lg:text-xl ">
						<li className="transform hover:scale-125 duration-500 ease-in-out">
							<a href="index.html">Home</a>
						</li>
						<li className="transform hover:scale-125 duration-500 ease-in-out">
							<a href="index.html">About</a>
						</li>
						<li className="transform hover:scale-125 duration-500 ease-in-out">
							<a href="index.html">Projects</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
