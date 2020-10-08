import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, apdateNewPostTexActionCreator } from "../../../redux/state";


const MyPosts = (props) => {
	const postElements = props.postsData.map((post) => (
		<Post message={post.message} likesCount={post.likesCount} key={post.id} />
	));

	let newPostElement = React.createRef();

	const addPost = () => {
		props.dispatch(addPostActionCreator());
	};

	const onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(apdateNewPostTexActionCreator(text));
	};

	return (
		<div className={classes.myPosts}>
			<h3>My post</h3>
			<div style={{ marginBottom: "20px" }}>
				<textarea
					onChange={onPostChange}
					value={props.newPostText}
					ref={newPostElement}
				/>
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	);
};

export default MyPosts;
