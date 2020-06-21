import React from 'react'
import mod from './FindUsers.module.css'

const FindUsers = (props) => {
    
    
    let send_message = () => {
        props.send_message()
    }
    
    let updateMessageArea = (e) => {
        let areaText = e.target.value; //e - событие , target.value - наша цель == значение 
        props.updateMessageArea(areaText)
    }

    return (
        <div className={mod.usersWrapper}>

        </div>
    )
}

export default FindUsers;