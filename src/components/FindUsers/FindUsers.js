import React from 'react'
import mod from './FindUsers.module.css'

const FindUsers = (props) => {

    if (props.usersData.length === 0) {
        props.setUsersData([
            { id: '1', usersSrc: "https://i.stack.imgur.com/ILTQq.png", followed: false, name: 'Dmitriy', location: { city: 'Kharkiv', country: 'Ukraine' }, describe: 'Looking job React Dev' },
            { id: '2', usersSrc: "https://i.stack.imgur.com/ILTQq.png", followed: true, name: 'Sergei', location: { city: 'Kharkiv', country: 'Ukraine' }, describe: 'Looking job React Dev' },
            { id: '3', usersSrc: "https://i.stack.imgur.com/ILTQq.png", followed: true, name: 'Reiner', location: { city: 'Kharkiv', country: 'Ukraine' }, describe: 'Looking job React Dev' },
            { id: '4', usersSrc: "https://i.stack.imgur.com/ILTQq.png", followed: true, name: 'Alex', location: { city: 'Kharkiv', country: 'Ukraine' }, describe: 'Looking job React Dev' },
        ]);
    }

    return (
        <div>
            {props.usersData.map((el) =>
                <div key={el.id}  >
                    <div>
                        <img src={el.usersSrc} className={mod.usersImg} />
                        {el.followed ?
                            <button onClick={() => { props.unfollow(el.id) }}>Unfollow</button>
                            :
                            <button onClick={() => { props.follow(el.id) }}>follow</button>}
                    </div>
                    <div className={mod.info_wrap}>
                        <div>{el.name}</div>
                        <div>{el.location.city}</div>
                        <div>{el.describe}</div>
                        <div>{el.location.country}</div>
                    </div>
                </div>)}
        </div>
    )
}

export default FindUsers;