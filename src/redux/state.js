const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";
const APDATE_NEW_POST_TEXT = "APDATE-NEW-POST-TEXT";

const store = {
	_state: {
		dialogPage: {
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
		},

		profilePage: {
			postsData: [
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
		switch (action.type) {
			case ADD_POST:
				let newPost = {
					id: 5,
					message: this._state.profilePage.newPostText,
					likesCount: 0,
				};
				this._state.profilePage.postsData.push(newPost);
				this._state.profilePage.newPostText = "";
				this._callSubscriber(this._state);
				break;
			case APDATE_NEW_POST_TEXT:
				this._state.profilePage.newPostText = action.newText;
				this._callSubscriber(this._state);
				break;
			case SEND_MESSAGE:
				let newMessage = {
					id: 7,
					message: action.sendMessage,
				};
				this._state.dialogPage.dialogsData[action.id].messageData.push(
					newMessage
				);
				this._callSubscriber(this._state);
				break;
			case UPDATE_MESSAGE:
				this._state.dialogPage.dialogsData[action.id].newMessageText = action.newMessageText
				this._callSubscriber(this._state);
				break;
			default:
				break;
		}
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


// action это обьект у которого обязательно есть свойство type
