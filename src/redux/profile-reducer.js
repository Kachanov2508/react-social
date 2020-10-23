const ADD_POST = "ADD-POST";
const APDATE_NEW_POST_TEXT = "APDATE-NEW-POST-TEXT";

let initialState = {
   postsData: [
      { id: 1, message: "Hi, how are you?", likesCount: "9" },
      { id: 2, message: "It's my first post", likesCount: "15" },
   ],
   newPostText: "",
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         };
         state.postsData.push(newPost);
         state.newPostText = "";
         break;
      case APDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         break;
      default:
         break;  
   }
   return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const apdateNewPostTextActionCreator = (text) => {
	return {
		type: APDATE_NEW_POST_TEXT,
		newText: text,
	}; 
};

export default profileReducer;  