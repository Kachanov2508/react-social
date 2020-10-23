import React from "react";

import {
	addPostActionCreator,
	apdateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

	let state = props.store.getState();

	const addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	const onPostChange = (text) => {
		props.store.dispatch(apdateNewPostTextActionCreator(text));
	};

	return (
		<MyPosts
			apdateNewPostText={onPostChange}
			addPost={addPost}
			postsData={state.profilePage.postsData}
			newPostText={state.profilePage.newPostText}
		/>
	);
};

export default MyPostsContainer;
