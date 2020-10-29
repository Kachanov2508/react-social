import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {

    if( props.users.length === 0 ) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img2.freepng.ru/20180319/yge/kisspng-computer-icons-person-symbol-meridian-energy-group-person-icon-145444-bryan-le-photography-5ab04a4e37af55.3382397515215027982281.jpg',
                followed: false,
                fullNeme: "Dmitry",
                status: "i am a boss",
                location: { city: "Minsk", country: "Belarus" },
            },
            {
                id: 2,
                photoUrl: 'https://img2.freepng.ru/20180319/yge/kisspng-computer-icons-person-symbol-meridian-energy-group-person-icon-145444-bryan-le-photography-5ab04a4e37af55.3382397515215027982281.jpg',
                followed: true,
                fullNeme: "Sasha",
                status: "i am a boss",
                location: { city: "Moscow", country: "Russia" },
            },
            {
                id: 3,
                photoUrl: 'https://img2.freepng.ru/20180319/yge/kisspng-computer-icons-person-symbol-meridian-energy-group-person-icon-145444-bryan-le-photography-5ab04a4e37af55.3382397515215027982281.jpg',
                followed: false,
                fullNeme: "Andrew",
                status: "i am a boss",
                location: { city: "London", country: "Englsnd" },
            },
        ])
    }

	return (
		<div>
			{props.users.map((user) => {
				return (
					<div key={user.id}>
						<span>
							<div>
								<img
									src={user.photoUrl}
									className={classes.photo}
								/>
							</div>
							<div>
                                {
                                    user.followed 
                                    ? ( <button onClick={() => { props.unfollow(user.id); }}>unfollow</button>) 
                                    : (	<button onClick={() => { props.follow(user.id) }}>Follow</button> )
                                }
							</div>
						</span>
						<span>
							<span>
								<div>{user.fullname}</div>
								<div>{user.status}</div>
							</span>
							<span>
								<div>{user.location.country}</div>
								<div>{user.location.city}</div>
							</span>
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default Users;
