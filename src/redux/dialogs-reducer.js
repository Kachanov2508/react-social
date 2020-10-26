const APDATE_NEW_MESSAGE_BODY = "APDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case APDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			break;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = "";
			state.messages.push({ id: 6, message: body });
			break;
		default:
			break;
	}
	return state;
};

export const sendNewMessageActionCreator = (id, sendMessage) => {
	return {
		type: SEND_MESSAGE,
		id,
		sendMessage,
	};
};
export const updateNewMessageTextActionCreator = (id, newMessageText) => {
	return {
		type: APDATE_NEW_MESSAGE_BODY,
		id,
		newMessageText
	}
}

export default dialogsReducer;