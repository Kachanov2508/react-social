import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {

	return (
		<div className={classes.item}>
			<img
				src="https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png"
				alt="avatar"
			/>
			{props.message}
			<div>
				<span>{`Like ${props.likesCount}`}</span>
			</div>
		</div>
	);
};

export default Post;