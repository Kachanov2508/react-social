import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import {addPost, updateNewPostText, subscribe} from "./redux/state";

const rerender = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

rerender(store.getState());

store.subscribe(rerender);

// const test = () => {
// 	let users = store._state.dialogPage.dialogsData
// 	for(let i = 0; users.length > i; i++) {
// 		users[i].messageData.map(item => console.log(item.message))
// 	}
// }

// test();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();