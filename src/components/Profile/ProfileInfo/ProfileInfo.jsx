import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
		console.log(props)
	if(!props.profile) {
		return(
			<Preloader />
		)
	}
	
	return (
		<div className={classes.profileInfo}>
			{/* <figure>
				<img
					src="https://wowslider.net/local-sliders/demo-10/data1/images/road220058.jpg"
					alt={`qweqwe`}
				/>
			</figure> */}
			<div className={classes.info}>
				<img src={props.profile.photos.large} alt="wefrr"/>
				<p><span style={{fontWeight: "600"}}>Статус: </span>{props.profile.aboutMe}</p>
				<p><span style={{fontWeight: "600"}}>ФИО: </span>{props.profile.fullName}</p>
				<p><span style={{fontWeight: "600"}}>Работа: </span>{props.profile.fullName}</p>
				<p><span style={{fontWeight: "600"}}>Статус: </span>{<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />}</p>
			</div>
		</div>
	);
};

export default ProfileInfo;
