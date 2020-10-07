const store = {
	_state: {
		dialogPage: {
			dialogsData: [
				{
					id: 1,
					name: "Татьяна",
					img:
						"https://avatarko.ru/img/avatar/28/devushka_brunetka_cosplay_27741.jpg",
				},
				{
					id: 2,
					name: "Николай",
					img:
						"https://avatarko.ru/img/avatar/31/muzhchina_shlyapa_galstuk_30949.jpg",
				},
				{
					id: 3,
					name: "Александра",
					img: "https://avatarko.ru/img/avatar/1/Batman_siluet.jpg",
				},
				{
					id: 4,
					name: "Евгений",
					img:
						"https://avatarko.ru/img/avatar/4/siluet_volk_luna_3945.jpg",
				},
				{
					id: 5,
					name: "Дмитрий",
					img:
						"https://shopsticker.ru/image/cache/catalog/image/rock/1-800x800.png",
				},
				{
					id: 6,
					name: "Мария",
					img:
						"https://avatarko.ru/img/avatar/3/devushka_brunetka_2748.jpg",
				},
			],

			messageData: [
				{ id: 1, message: "Привет" },
				{ id: 2, message: "Добрый день" },
				{ id: 3, message: "Разработка на реакт" },
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
		if (action.type === "ADD-POST") {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);
		} else if (action.type === "APDATE-NEW-POST-TEX") {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	},
};

window.state = store;

export default store;