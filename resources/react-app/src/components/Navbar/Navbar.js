import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <aside>
      <nav>
        <Link to="/">Мои занятия</Link>
        <Link to="/subscription">Мой абонемент</Link>
        <Link to="/info">Информация</Link>
      </nav>
    </aside>
  );
};

export default Navbar;
