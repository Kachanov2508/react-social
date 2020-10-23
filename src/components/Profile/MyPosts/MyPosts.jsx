import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

	const postElements = props.postsData.map((post) => (
		<Post message={post.message} likesCount={post.likesCount} key={post.id} />
	));

	let newPostElement = React.createRef();

	const onAddPost = () => {
		props.addPost()
	};

	const onPostChange = () => {
		let text = newPostElement.current.value;
		props.apdateNewPostText(text)
	};

	return (
		<div className={classes.myPosts}>
			<h3>Мои посты</h3>
			<div style={{ marginBottom: "20px" }}>
				<textarea
					onChange={onPostChange}
					value={props.newPostText}
					ref={newPostElement}
					placeholder="Укажите текст поста"
				/>
				<button onClick={onAddPost}>Добавить пост</button>
			</div>
			<div className={classes.posts}>{postElements}</div>
		</div>
	);
};

export default MyPosts;
