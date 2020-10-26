import React from "react";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/store"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
	
	let state = props.store.getState().dialogsPage;


	let onSandMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}


	return (
		<Dialogs updateNewMessageBody={onNewMessageChange} sandMessage={onSandMessageClick} dialogsPage={state} />
	);
};

export default DialogsContainer;
