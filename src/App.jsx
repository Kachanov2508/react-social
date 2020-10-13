import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header img="https://bower.io/img/bower-logo.png" />
				<Navbar friends={props.state} />
				<div className="app-wrapper-content">
					<Route
						path="/profile"
						render={() => (
							<Profile
								profilePage={props.state.profilePage}
								dispatch={props.dispatch}
							/>
						)}
					/>
					<Route
						path="/dialogs"
						render={() => <Messages dialogPage={props.state.dialogPage} dispatch={props.dispatch} />}
					/>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
