import React from 'react';
import mod from './navbar.module.css'; 
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={mod.navbar}>
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
                    <NavLink to="/Settings" activeClassName={mod.active}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;