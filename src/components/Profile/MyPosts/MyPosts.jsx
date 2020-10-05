import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

	const postElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

	let newPostElement = React.createRef();
	const addPost = () => {
		let text = newPostElement.current.value;
		console.log(text);
	}

	return (
		<div className={classes.myPosts}>
			<h3>My post</h3>
			<div style={{marginBottom: "20px"}}>
				<textarea placeholder="Укажите ваш текст поста" ref={newPostElement}></textarea>
				<button onClick={addPost}>Add post</button>
			</div>
			<div className={classes.posts}>
				{postElements}
			</div>
		</div>
	);
};

export default MyPosts;