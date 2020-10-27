import { connect } from "react-redux";
import {
	updateNewMessageBodyCreator,
	sendMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
// 	let state = props.store.getState().dialogsPage;

// 	let onSandMessageClick = () => {
// 		props.store.dispatch(sendMessageCreator());
// 	};

// 	let onNewMessageChange = (body) => {
// 		props.store.dispatch(updateNewMessageBodyCreator(body));
// 	};

// 	return (
// 		<Dialogs
// 			updateNewMessageBody={onNewMessageChange}
// 			sandMessage={onSandMessageClick}
// 			dialogsPage={state}
// 		/>
// 	);
// };

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		sandMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
	};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
