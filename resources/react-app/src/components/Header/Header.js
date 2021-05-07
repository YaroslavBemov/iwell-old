import React from "react";
import { NavLink } from "react-router-dom";
import './Header.scss';

const Header = (props) => {
  return (
    <header>
      <nav>
        <NavLink to='./trainings'>Тренировки</NavLink>
        <NavLink to='./pricing_plans'>Тарифы</NavLink>
        <NavLink to='./schedule'>Расписание</NavLink>
      </nav>
    </header>
  );
};

export default Header;