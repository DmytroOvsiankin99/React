import React from 'react';
import mod from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import './../TextPostition.css';



const Message = (props) => {
    return (
        <li className={props.classRight}>
            <img className={mod.messageImg} src={props.src} />
            {props.message}
        </li>
    )
}

export default Message;