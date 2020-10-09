import React from "react";
import { Route } from "react-router-dom";
import classes from "./Message.module.css";
import MessageItem from "./MessageItem/MessageItem";

const Message = (props) => {
	let message = React.createRef();

	const setMessage = () => {
		let text = message.current.value;
		console.log(text);
	};

	return (
		<Route path={`/dialogs/${props.path}`}>
			<div className={classes.message}>
				<ul>
					{props.user.map((message) => (
						<MessageItem message={message.message} key={message.id} />
					))}
				</ul>
				<textarea placeholder="текст сообщения" ref={message}></textarea>
				<button className={classes.button} onClick={setMessage}>
					Отправить
				</button>
			</div>
		</Route>
	);
};

export default Message;
