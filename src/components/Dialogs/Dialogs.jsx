import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	const dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
	const messageElements = props.messageData.map(message => <Message message={message.message} id={message.id} key={message.id} />);

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogElements}
			</div>
			<div className={classes.messages}>
				{messageElements}
			</div>
		</div>
	);
};

export default Dialogs;
