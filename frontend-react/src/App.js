import React from "react";

import { About, Footer, Header, Skill, Testimonial, Work } from "./containers";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Footer />
			<Skill />
			<Testimonial />
			<Work />
		</div>
	);
};

export default App;
