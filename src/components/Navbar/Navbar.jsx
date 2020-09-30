import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<ul>
				<li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
				<li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink></li>
				<li className={classes.item}>Main content</li>
				<li className={classes.item}>News</li>
				<li className={classes.item}>Music</li>
				<li className={classes.item}>Settings</li>
			</ul>
		</nav>
	);
};

export default Navbar;