import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header img="https://bower.io/img/bower-logo.png"/>
			<Navbar />
			<Profile />
		</div>
	);
};

export default App;
