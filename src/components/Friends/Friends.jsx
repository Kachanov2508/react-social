import React from "react";
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {

   const users = props.friends.friends.map( user => <Friend firstName={user.firstName} lastName={user.lastName} id={user.id} img={user.img} key={user.id}/> )

	return (
		<div className={classes.friends}>
         <h3 className={classes.heading}>Мои друзья</h3>
         {users}
		</div>
	);
};

export default Friends;