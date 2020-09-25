import React from "react";
import MyPosts from "./MyPosts/MyPosts";
// import classes from "./Profile.module.css";

const Profile = () => {
	return (
		<div>
			<figure>
				<img src="https://wowslider.net/local-sliders/demo-10/data1/images/road220058.jpg" alt={`qweqwe`}/>
			</figure>
			<div>avatar + description</div>
			<MyPosts />
		</div>
	);
};

export default Profile;
