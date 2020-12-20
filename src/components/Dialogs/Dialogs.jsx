import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map((d) => (
		<DialogsItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />
	));
	let messageElements = state.messages.map((m) => (
		<Message message={m.message} key={m.id} />
	));

	let addNewMessage = (values) => {
		props.sandMessage(values.newMessageBody)
	}
	
	if (!props.isAuth) {
		return <Redirect to="/login" />
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItem}>{dialogsElements}</div>
			<div className="messages">
				<div>{messageElements}</div>
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	);
};


const addMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component="textarea" name="newMessageBody" placeholder="Введите текст сообщения" />
			<div><button>Отправить сообщение</button></div>
		</form>
	)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(addMessageForm)

export default Dialogs;