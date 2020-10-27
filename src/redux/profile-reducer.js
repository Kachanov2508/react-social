const ADD_POST = "ADD-POST";
const APDATE_NEW_POST_TEXT = "APDATE-NEW-POST-TEXT";

let initialState = {
	posts: [
		{ id: 1, message: "Hi, how are you?", likesCount: "9" },
		{ id: 2, message: "It's my first post", likesCount: "15" },
	],
	newPostText: "magmer.ru",
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ""
			};
		}
		case APDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			}
		}
		default:
			return state;
	}
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const apdateNewPostTextActionCreator = (text) => {
	return {
		type: APDATE_NEW_POST_TEXT,
		newText: text,
	};
};

export default profileReducer;
