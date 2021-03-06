import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer } from "redux-form";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer  ,
	friends: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;