import React from "react";
import classes from "./MessageItem.module.css";

const MessageItem = (props) => {
   debugger;
	// function renderMessage() {
	// 	return props.message.map((message) => (
	// 		<li>{message}</li>
	// 	));
	// }

	return (
		<div className={classes.message}>
			<div className={classes.sentMessage}>
				<ul>{props.message.map((message) => (
			<li>{message}</li>
		))}</ul>
			</div>
		</div>
	);
};

export default MessageItem;
