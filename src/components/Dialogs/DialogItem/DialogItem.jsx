import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {
	return (
		<div className={classes.dialog}>
			<NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>
				<figure>
					<img src={props.img} alt={`${props.name} ${props.id}`}/>
				</figure>
				{props.name}
			</NavLink>
		</div>
	);
};

export default DialogItem;
