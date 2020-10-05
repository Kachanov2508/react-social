import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import Friends from "../Friends/Friends";


const Navbar = (props) => {
	
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
			<Friends friends={props.friends}/>
		</nav>
	);
};

export default Navbar;