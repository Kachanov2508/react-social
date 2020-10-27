import { connect } from "react-redux";
import {
	addPostActionCreator,
	apdateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
// 	let state = props.store.getState();

// 	const addPost = () => {
// 		props.store.dispatch(addPostActionCreator());
// 	};

// 	const onPostChange = (text) => {
// 		let action = apdateNewPostTextActionCreator(text);
// 		props.store.dispatch(action);
// 	};

// 	return (
// 		<MyPosts
// 			apdateNewPostText={onPostChange}
// 			addPost={addPost}
// 			posts={state.profilePage.posts}
// 			newPostText={state.profilePage.newPostText}
// 		/>
// 	);
// };

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		apdateNewPostText: (text) => {
			let action = apdateNewPostTextActionCreator(text);
			dispatch(action);
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
