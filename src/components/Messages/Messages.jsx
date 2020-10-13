import React from "react";
import classes from "./Messages.module.css";
import Users from "./Users/Users";
import Message from "./Message/Message";

const Messages = (props) => {
	const dialogElements = props.dialogPage.dialogsData.map((dialog) => (
		<Users
			name={dialog.name}
			id={dialog.id}
			key={dialog.id}
			img={dialog.img}
		/>
	));
	const messageElements = props.dialogPage.dialogsData.map((user) => (
		<Message user={user.messageData} key={user.id} path={user.id} dispatch={props.dispatch} id={user.id} newMessageText={user.newMessageText}/>
	));

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogElements}</div>
			<div className={classes.messages}>{messageElements}</div>
		</div>
	);
};

export default Messages;
