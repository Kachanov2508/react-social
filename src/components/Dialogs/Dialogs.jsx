import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	
	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => (
		<DialogsItem name={d.name} id={d.id} avatar={d.avatar} />
	));
	let messageElements = state.messages.map((m) => (
		<Message message={m.message} />
	));

	let newMessageBody = state.newMessageBody;


	let onSandMessageClick = () => {
		props.sandMessage()
	}

	let onNewMessageChange = (event) => {
		let body = event.target.value;
		props.updateNewMessageBody(body);
	}


	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItem}>{dialogsElements}</div>
			<div className="messages">
				<div>{messageElements}</div>
				<div>
					<div><textarea placeholder="Введите текст сообщения" value={newMessageBody} onChange={onNewMessageChange} /></div>
					<div><button onClick={onSandMessageClick}>Отправить сообщение</button></div>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
