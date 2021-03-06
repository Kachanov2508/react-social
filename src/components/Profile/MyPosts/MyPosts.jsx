import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { required, maxLengthCreator } from "../../../utils/validators/validators"
import { TextArea } from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {

	const postElements = props.posts.map((post) => (
		<Post message={post.message} likesCount={post.likesCount} key={post.id} />
	));

	const onAddPost = (values) => {
		props.addPost(values.newPostText)
	};

	return (
		<div className={classes.myPosts}>
			<h3>Мои посты</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={classes.posts}>{postElements}</div>
		</div>
	);
};

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name="newPostText" placeholder={"Укажите текст поста"} component={TextArea} validate={[required, maxLength10]} />
			<button>Добавить пост</button>
		</form>
	)
}

const AddNewPostFormRedux = reduxForm({ form: "profileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;
