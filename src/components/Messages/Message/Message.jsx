import React from "react";
import { Route } from "react-router-dom";
import classes from "./Message.module.css";
import MessageItem from "./MessageItem/MessageItem";
import {
	sendNewMessageActionCreator,
	updateNewMessageTextActionCreator,
} from "../../../redux/state";

const Message = (props) => {
	let message = React.createRef();

	const sendMessage = () => {
		let text = message.current.value;
		let id = props.id - 1;
		props.dispatch(sendNewMessageActionCreator(id, text));
	};

	const updateMessage = (event) => {
		let text = event.target.value;
		let id = props.id - 1;
		props.dispatch(updateNewMessageTextActionCreator(id, text));
	};

	return (
		<Route path={`/dialogs/${props.path}`}>
			<div className={classes.message}>
				<ul>
					{props.user.map((message) => (
						<MessageItem message={message.message} key={message.id} />
					))}
				</ul>
				<textarea
					placeholder="текст сообщения"
					ref={message}
					onChange={updateMessage}
					value={props.newMessageText}
				></textarea>
				<button className={classes.button} onClick={sendMessage}>
					Отправить
				</button>
			</div>
		</Route>
	);
};

export default Message;
