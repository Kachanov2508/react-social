import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const rerender = (state) => {
	ReactDOM.render(
		<React.StrictMode>
				<App
					state={state}
					dispatch={store.dispatch.bind(store)}
					store={store}
				/>
		</React.StrictMode>,
		document.getElementById("root")
	);
};

rerender(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerender(state);
});

serviceWorker.unregister();
