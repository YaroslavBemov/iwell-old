import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';
import logo from '../../assets/icons/iwell-logo.png';
import user from '../../assets/icons/user.svg';
import notifications from '../../assets/icons/notifications.svg';


const Header = (props) => {
  return (
    <header className='header'>
      <nav className='header__navbar'>
        <NavLink to='/'><img src={logo} alt='iwell-logo' /></NavLink>
        <NavLink to='./trainings'>Тренировки</NavLink>
        <NavLink to='./pricing_plans'>Тарифы</NavLink>
        <NavLink to='./schedule'>Расписание</NavLink>
        <NavLink to='./schedule'><img src={user} alt='user' /></NavLink>
        <NavLink to='./schedule'><img src={notifications} alt='notifications' /></NavLink>
      </nav>
    </header>
  );
};

export default Header;