import React from "react";
import classes from "./Header.module.css"

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src={props.img} alt="logo" />
		</header>
	);
};

export default Header;
