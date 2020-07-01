import React from 'react';
import mod from './navbar.module.css'; 
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={mod.navbar}>
            <div className={mod.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
            <ul className={mod.navbarInner}>
                <li className={mod.item}>
                    <NavLink to="/profilecontent" activeClassName={mod.active}>Profile</NavLink>
                </li>
                <li className={mod.item}>
                    <NavLink to="/Dialogs" activeClassName={mod.active}>Dialogs</NavLink>
                </li>
                <li className={mod.item}>
                    <NavLink to="/News" activeClassName={mod.active}>News</NavLink>
                </li>
                <li className={mod.item}>
                    <NavLink to="/Music" activeClassName={mod.active}>Music</NavLink>
                </li>
                <li className={mod.item}>
                    <NavLink to="/FindUser" activeClassName={mod.active}>Find User</NavLink>
                </li>
                <li className={mod.item}>
                    <NavLink to="/Settings" activeClassName={mod.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;