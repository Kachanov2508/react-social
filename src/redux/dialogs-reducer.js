const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let initialState = {
	dialogsData: [
		{
			id: 1,
			name: "Татьяна",
			img:
				"https://avatarko.ru/img/avatar/28/devushka_brunetka_cosplay_27741.jpg",
			messageData: [
				{ id: 1, message: "Здравствуйте Татьяна" },
				{
					id: 2,
					message: "Разнообразный и богатый опыт укрепление .",
				},
				{
					id: 3,
					message:
						"Таким образом постоянный количественный рост и сфера нашей ",
				},
			],
			newMessageText: ""
		},
		{
			id: 2,
			name: "Николай",
			img:
				"https://avatarko.ru/img/avatar/31/muzhchina_shlyapa_galstuk_30949.jpg",
			messageData: [
				{ id: 1, message: "Привет Николай" },
				{ id: 2, message: "Не следует, однако забывать" },
				{
					id: 3,
					message:
						"Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития.",
				},
			],
			newMessageText: ""
		},
		{
			id: 3,
			name: "Александра",
			img: "https://avatarko.ru/img/avatar/1/Batman_siluet.jpg",
			messageData: [
				{ id: 1, message: "Хай Александра" },
				{
					id: 2,
					message:
						"Задача организации, в особенности же укрепление и развитие структуры ",
				},
				{ id: 3, message: "Не следует, однако забывать" },
			],
			newMessageText: ""
		},
		{
			id: 4,
			name: "Евгений",
			img:
				"https://avatarko.ru/img/avatar/4/siluet_volk_luna_3945.jpg",
			messageData: [
				{ id: 1, message: "Хелоу Евгений" },
				{
					id: 2,
					message:
						"Товарищи! постоянное информационно-пропагандистское ",
				},
				{
					id: 3,
					message:
						"Не следует, однако забывать, что консультация с широким активом ",
				},
			],
			newMessageText: ""
		},
		{
			id: 5,
			name: "Дмитрий",
			img:
				"https://shopsticker.ru/image/cache/catalog/image/rock/1-800x800.png",
			messageData: [
				{ id: 1, message: "Аригато Дмитрий" },
				{
					id: 2,
					message: "С другой стороны постоянный количественный рост",
				},
				{
					id: 3,
					message:
						"Равным образом реализация намеченных плановых заданий требуют определения и уточнения форм развития.",
				},
			],
			newMessageText: ""
		},
		{
			id: 6,
			name: "Мария",
			img:
				"https://avatarko.ru/img/avatar/3/devushka_brunetka_2748.jpg",
			messageData: [
				{ id: 1, message: "Бонжур Мария" },
				{
					id: 2,
					message:
						"Разнообразный и богатый опыт сложившаяся структура",
				},
				{
					id: 3,
					message: "Таким образом начало повседневной работы",
				},
			],
			newMessageText: ""
		},
	],
}


const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let newMessage = {
				id: 7,
				message: action.sendMessage,
			};
			state.dialogsData[action.id].messageData.push(newMessage);
			break;
		case UPDATE_MESSAGE:
			state.dialogsData[action.id].newMessageText = action.newMessageText;
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
		type: UPDATE_MESSAGE,
		id,
		newMessageText
	}
}

export default dialogsReducer;