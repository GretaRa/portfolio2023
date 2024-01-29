import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const ScrollTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true);
			} else {
				setShowTopBtn(false);
			}
		});
	}, []);
	return (
		<>
			{showTopBtn && (
				<Link activeClass="active" smooth spy to="header">
					<button className="bg-peach-100 text-3xl p-2 border-2 border-black rounded-full fixed bottom-10 right-10 z-50 ">
						<AiOutlineArrowUp />
					</button>
				</Link>
			)}
		</>
	);
};

export default ScrollTop;
