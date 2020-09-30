import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div className={classes.profileInfo}>
			<figure>
				<img
					src="https://wowslider.net/local-sliders/demo-10/data1/images/road220058.jpg"
					alt={`qweqwe`}
				/>
			</figure>
			<div>avatar + description</div>
		</div>
	);
};

export default ProfileInfo;
