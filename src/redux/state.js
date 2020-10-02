let state = {
	dialogPage: {
		dialogsData: [
			{ id: 1, name: "Татьяна" },
			{ id: 2, name: "Николай" },
			{ id: 3, name: "Александра" },
			{ id: 4, name: "Евгений" },
			{ id: 5, name: "Дмитрий" },
			{ id: 6, name: "Мария" },
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
	},
};

export default state;
