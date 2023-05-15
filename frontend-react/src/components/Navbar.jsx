import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../constants";
// importing navbar icons from react icons
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{/* The curly braces here is called dynamic code block */}
				{["home", "about", "work", "skills", "testimonial", "contact"].map(
					(item) => (
						<li className="app__flex p-text" key={`link-${item}`}>
							<div></div>
							<a href={`#${item}`}>{item}</a>
						</li>
					)
				)}
			</ul>
			{/* Mobile Menu */}
			<div className="app__navbar-mobile">
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{/* Dynamic code block with framer motion div */}
				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{[
								"home",
								"about",
								"work",
								"skills",
								"testimonial",
								"contact",
							].map((item) => (
								<li key={{ item }}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
