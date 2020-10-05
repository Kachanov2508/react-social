import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
	return (
		<div className={classes.friend}>
			<figure className={classes.avatar}>
				<img
					src={props.img}
					alt={`${props.firstName} ${props.lastName} avatar`}
				/>
			</figure>
			<div>
				<p className={classes.firsName}>{props.firstName}</p>
				<p className={classes.lastName}>{props.lastName}</p>
			</div>
		</div>
	);
};

export default Friend;
