import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
	let dialogsData = [
		{ id: 1, name: "Татьяна" },
		{ id: 2, name: "Николай" },
		{ id: 3, name: "Александра" },
		{ id: 4, name: "Евгений" },
		{ id: 5, name: "Дмитрий" },
		{ id: 6, name: "Мария" },
	];

	let messageData = [
		{id: 1, message: "Привет"},
		{id: 2, message: "Добрый день"},
		{id: 3, message: "Разработка на реакт"},
	]

	const dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
	const messageElements = messageData.map(maessage => <Message name={maessage.maessage} id={maessage.id} key={maessage.id} />);

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
