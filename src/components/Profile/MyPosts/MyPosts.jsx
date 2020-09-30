import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

	let postsData = [
		{ id: 1, message: "Hi, how are you?", likesCount: "9" },
		{ id: 2, message: "It's my first post", likesCount: "15" },
	]

	const postElements = postsData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

	return (
		<div className={classes.myPosts}>
			<h3>My post</h3>
			<div style={{marginBottom: "20px"}}>
				<textarea placeholder="Укажите ваш текст поста"></textarea>
				<button>Add post</button>
			</div>
			<div className={classes.posts}>
				{postElements}
			</div>
		</div>
	);
};

export default MyPosts;