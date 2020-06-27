import React from 'react'
import mod from './FindUsers.module.css'

let Users = (props) => {

    let sizePaggination = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];

    for (let i = 1; i <= sizePaggination; i++) {
        pages.push(i);
    }
    
    return (<div>
        <div className={mod.paggination}>
            { pages.map((el) => <span
                    key={el.id}
                    className={ props.currentPage === (el) ? mod.selectedPaggination : ''}
                    onClick={() => { props.clickFoo(el) }}
                >
                {el}
            </span>)}
        </div>

        {props.usersData.map((el) =>
            <div key={el.id}  >
                <div>
                    <img src={el.photos.small != null ? el.photos.small : props.userPhoto} className={mod.usersImg} />
                    {el.followed ?
                        <button onClick={() => { props.unfollow(el.id) }}>Unfollow</button>
                        :
                        <button onClick={() => { props.follow(el.id) }}>follow</button>}
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