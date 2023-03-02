import React from "react";

import { About, Footer, Header, Skill, Testimonial, Work } from "./containers";

import { Navbar } from "./components";

const App = () => {
	return (
		<div className="app">
			<About />
			<Footer />
			<Header />
			<Skill />
			<Testimonial />
			<Work />
		</div>
	);
};

export default App;
