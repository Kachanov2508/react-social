import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
	return (
		<div className={classes.content}>
			<figure>
				<img src="https://wowslider.net/local-sliders/demo-10/data1/images/road220058.jpg"/>
			</figure>
			<div>avatar + description</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
