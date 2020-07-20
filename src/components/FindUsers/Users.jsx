import React from 'react'
import mod from './FindUsers.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'

let Users = (props) => {

    let sizePaggination = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];

    for (let i = 1; i <= sizePaggination; i++) {
        pages.push(i);
    }

    return (<div>
        <div className={mod.paggination}>
            {pages.map((el) => <span
                key={el.id}
                className={props.currentPage === (el) ? mod.selectedPaggination : ''}
                onClick={() => { props.clickFoo(el) }}
            >
                {el}
            </span>)}
        </div>

        {props.usersData.map((el) =>
            <div key={el.id}  >
                <div>
                    <NavLink to={'/profilecontent/' + el.id}>
                        <img src={el.photos.small != null ? el.photos.small : props.userPhoto} className={mod.usersImg} />
                    </NavLink>
                    {el.followed
                        ? <button disabled={props.toggleIsFollowing.some(id=>id===el.id)} onClick={() => {
                            props.toggleIsFollowing(true, el.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                withcredentials: true,
                                headers: {
                                    "API-KEY": 'a2eaa5ee-ea65-4b0b-8c62-e683eb4c4d17'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(el.id)
                                    }
                                    props.toggleIsFollowing(false, el.id)
                                });
                        }}>Unfollow</button>
                        : <button disabled={props.toggleIsFollowing.some(id=>id===el.id)} onClick={() => {
                        props.toggleIsFollowing(true, el.id)
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                            withcredentials: true,
                            headers: {
                                "API-KEY": 'a2eaa5ee-ea65-4b0b-8c62-e683eb4c4d17'
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(el.id)
                                }
                                props.toggleIsFollowing(false, el.id)
                            });
                    }}>follow</button>}
                </div>
                <div className={mod.info_wrap}>
                    <div>{el.name}</div>
                    <div>{"Kharkiv"}</div>
                    <div>{el.status}</div>
                    <div>{"Ukraine"}</div>
                </div>
            </div>)}
    </div>)
}


export default Users;