import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css";

const DialogsItem = (props) => {

	return (
		<div className={classes.users}>
			<NavLink to={`/dialogs/${props.id}`} activeClassName={classes.active}>
				<figure>
					<img src={props.avatar} alt={`${props.name} ${props.id}`}/>
				</figure>
				{props.name}
			</NavLink>
		</div>
	);
};

export default DialogsItem;
