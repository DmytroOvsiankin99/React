import React from 'react';
import mod from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <li>
            <img className={mod.dialogImg} src={props.dialogImg} />
            <NavLink to={"/dialogs/" + props.id}>
                {props.dialogName}
            </NavLink>
        </li>
    );
}

export default DialogItem;