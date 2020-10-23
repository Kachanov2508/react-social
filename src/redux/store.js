import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";
import dialogsReducer from "./dialogs-reducer";



const store = {
	_state: {

	},
	
	_callSubscriber() {
		console.log("state changed");
	},

	getState() { 
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
		friendsReducer();

		this._callSubscriber(this._state);
	},
};
  
window.state = store;

export default store;