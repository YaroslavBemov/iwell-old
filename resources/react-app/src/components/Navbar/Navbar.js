import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import userAvatar from "../../assets/images/user-avatar.png";

const Navbar = (props) => {
    return (
        <aside className='navbar'>
            <img className='navbar__ava' src={userAvatar} alt="user-avatar" />
            <nav>
              <p>Анастасия Осипова</p>
                <NavLink to="/my_classes">Мои занятия</NavLink>
                <NavLink to="/my_pass">Мой абонемент</NavLink>
                <NavLink to="/info">Информация</NavLink>
            </nav>
        </aside>
    );
};

export default Navbar;
