const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
	users: [
		// {
		// 	id: 1,
		// 	photoUrl: 'https://img2.freepng.ru/20180319/yge/kisspng-computer-icons-person-symbol-meridian-energy-group-person-icon-145444-bryan-le-photography-5ab04a4e37af55.3382397515215027982281.jpg',
		// 	followed: false,
		// 	fullNeme: "Dmitry",
		// 	status: "i am a boss",
		// 	location: { city: "Minsk", country: "Belarus" },
		// },
		// {
		// 	id: 2,
		// 	photoUrl: 'https://img2.freepng.ru/20180319/yge/kisspng-computer-icons-person-symbol-meridian-energy-group-person-icon-145444-bryan-le-photography-5ab04a4e37af55.3382397515215027982281.jpg',
		// 	followed: true,
		// 	fullNeme: "Sasha",
		// 	status: "i am a boss",
		// 	location: { city: "Moscow", country: "Russia" },
		// },
		// {
		// 	id: 3,
		// 	photoUrl: 'https://img2.freepng.ru/20180319/yge/kisspng-computer-icons-person-symbol-meridian-energy-group-person-icon-145444-bryan-le-photography-5ab04a4e37af55.3382397515215027982281.jpg',
		// 	followed: false,
		// 	fullNeme: "Andrew",
		// 	status: "i am a boss",
		// 	location: { city: "London", country: "Englsnd" },
		// },
	],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
					}
					return user
                })
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
					}
					return user
                })
			};
		case SET_USERS: {
			return {...state, users: [...state.users, ...action.users]}
		}

		default:
			return state;
	}
};

export const followAC = (userId) => {
	return { type: FOLLOW, userId };
};
export const unfollowAC = (userId) => {
	return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
	return { type: SET_USERS, users };
};

export default usersReducer;

// Reducer - это функция через которую происходит модификация state
