import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from "../../assets/images/user.jpg"
import classes from "./Users.module.css";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pagesCount = Math.ceil(50 / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(page => {
                return (
                    <span className={props.currentPage === page && classes.selectedPage} onClick={() => { props.onPageChanged(page) }}>{page}</span>
                )
            })}
            {
                props.users.map(
                    (user) => {
                        return (
                            <div key={user.id}>
                                <span>
                                    <div>
                                        <NavLink to={`/profile/${user.id}`}>
                                            <img
                                                src={user.photos.small != null ? user.photos.small : userPhoto}
                                                className={classes.photo}
                                                alt={user.id}
                                            />
                                        </NavLink>
                                    </div>
                                    <div>
                                        {
                                            user.followed
                                                ? (<button onClick={() => { props.unfollow(user.id); }}>unfollow</button>)
                                                : (<button onClick={() => { props.follow(user.id) }}>Follow</button>)
                                        }
                                    </div>
                                </span>
                                <span>
                                    <span>
                                        <div>{user.name}</div>
                                        <div>{user.status}</div>
                                    </span>
                                    <span>
                                        <div>{"user.location.country"}</div>
                                        <div>{"user.location.city"}</div>
                                    </span>
                                </span>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Users;
