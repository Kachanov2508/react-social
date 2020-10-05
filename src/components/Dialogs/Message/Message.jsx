import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
	let message = React.createRef();

	const setMessage = () => {
		let text = message.current.value;
		console.log(text);
	};

	return (
		<div className={classes.message}>
			{/* {props.message} */}
			<div className={classes.sentMessage}>
				<ul>
					<li>Привет</li>
					<li>Добрый день!</li>
					<li>Какие курсы можно пройти?</li>
					<li>Разработка на ReactJS</li>
				</ul>
			</div>
			<textarea placeholder="текст сообщения" ref={message}></textarea>
			<button className={classes.button} onClick={setMessage}>
				Отправить
			</button>
		</div>
	);
};

export default Message;
