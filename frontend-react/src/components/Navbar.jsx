import React from "react";
import "./Navbar.scss";
import { images } from "../constants";

const Navbar = () => {
	return (
		<nav>
			<div>
				<img src={images.logo} alt="logo" />
			</div>
			<ul>
				{["home", "about", "work", "skills", "testimonial", "contact"].map(
					(item) => (
						<li key={`link-${item}`}>
							<a href={`#${item}`}>{item}</a>
						</li>
					)
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
