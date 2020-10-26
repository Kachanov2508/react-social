import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";

const ADD_POST = "ADD-POST";
const APDATE_NEW_POST_TEXT = "APDATE-NEW-POST-TEXT";

const APDATE_NEW_MESSAGE_BODY = "APDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
 
const store = {
	_state: {
		dialogsPage: {
			dialogs: [
				{
					id: 1,
					name: "Татьяна",
					avatar:
						"https://avatarko.ru/img/avatar/28/devushka_brunetka_cosplay_27741.jpg",
				},
				{
					id: 2,
					name: "Николай",
					avatar:
						"https://avatarko.ru/img/avatar/31/muzhchina_shlyapa_galstuk_30949.jpg",
				},
				{
					id: 3,
					name: "Александра",
					avatar: "https://avatarko.ru/img/avatar/1/Batman_siluet.jpg",
				},
				{
					id: 4,
					name: "Евгений",
					avatar:
						"https://avatarko.ru/img/avatar/4/siluet_volk_luna_3945.jpg",
				},
				{
					id: 5,
					name: "Дмитрий",
					avatar:
						"https://shopsticker.ru/image/cache/catalog/image/rock/1-800x800.png",
				},
				{
					id: 6,
					name: "Мария",
					avatar:
						"https://avatarko.ru/img/avatar/3/devushka_brunetka_2748.jpg",
				},
			],
			messages: [
				{ id: 1, message: "hi" },
				{ id: 2, message: "Привет" },
				{ id: 3, message: "helo" },
				{ id: 4, message: "bonjorno" },
				{ id: 5, message: "arigato" },
			],
			newMessageBody: "",
		},

		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likesCount: "9" },
				{ id: 2, message: "It's my first post", likesCount: "15" },
			],
			newPostText: "magmer.ru",
		},

		friends: [
			{
				id: 1,
				firstName: "Михаил",
				lastName: "Горбачев",
				img:
					"https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRtD8Rt4dOcNotQVv1NRj-6w",
			},
			{
				id: 2,
				firstName: "Мария",
				lastName: "Семенова",
				img:
					"https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRWlSGblX1_1QRBvnp85UJSw",
			},
			{
				id: 3,
				firstName: "Дмитрий",
				lastName: "Дятлов",
				img:
					"https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxR8uOdKS9gpiAPnGAGovPPmw",
			},
		],
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
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.friends = friendsReducer(this._state.friends, action);

		this._callSubscriber(this._state);
	},
};

window.state = store;

export default store;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const apdateNewPostTexActionCreator = (text) => {
	return {
		type: APDATE_NEW_POST_TEXT,
		newText: text,
	};
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
	return {
		type: APDATE_NEW_MESSAGE_BODY,
		body: body,
	};
};