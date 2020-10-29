import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header img="https://bower.io/img/bower-logo.png" />
				<Navbar friends={props.state} />
				<div className="app-wrapper-content">
					<Route
						path="/profile"
						render={() => <Profile store={props.store} />}
					/>
					<Route
						path="/dialogs"
						render={() => <DialogsContainer store={props.store} />}
					/>
					<Route path="/users" render={() => <UsersContainer />} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
