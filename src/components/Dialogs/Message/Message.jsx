import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {

	let message = React.createRef()
	
	const setMessage = () => {
		let text = message.current.value;
		console.log(text)
	}

	return (
		<div className={classes.message}>
			{/* {props.message} */}
			<textarea placeholder="текст сообщения" ref={message}></textarea>
			<button className={classes.button} onClick={setMessage}>Отправить</button>
		</div>
	);
};

export default Message;
