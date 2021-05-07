import React from "react";
import './Navbar.scss';

const Navbar = (props) => {
  return (
    <aside>
      <nav>
        <a>Мои занятия</a>
        <a>Мой абонемент</a>
        <a>Информация</a>
      </nav>
    </aside>
  );
};

export default Navbar;