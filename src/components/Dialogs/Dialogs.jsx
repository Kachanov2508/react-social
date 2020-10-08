import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	const dialogElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} img={dialog.img} />);
	// const messageElements = props.state.messageData.map(message => <Message message={message.message} id={message.id} key={message.id} />);
	const messageElements = <Message message={props.state.dialogsData}/>

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
