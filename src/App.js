import React from "react";
import "./App.css";
import HeaderConstainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderConstainer img="https://bower.io/img/bower-logo.png" />
				<Navbar friends={props.state} />
				<div className="app-wrapper-content">
					<Route
						path="/profile/:userId?"
						render={() => <ProfileContainer store={props.store} />}
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
