import React from "react";
import { Link } from "react-router-dom";
import Logo from "./icons/Logo";
import UserIcon from "./icons/UserIcon";
import BellIcon from "./icons/BellIcon";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link to="/"><Logo /></Link>
      <nav>
        <Link to="/training">Тренировки</Link>
        <Link to="/tariffs">Тарифы</Link>
        <Link to="/schedule">Расписание</Link>
      </nav>
      <div>
        <Link to="/user" className="mr-30"><UserIcon /></Link>
        <Link to="/bells"><BellIcon /></Link>
      </div>     
    </header>
  );
};

export default Header;
