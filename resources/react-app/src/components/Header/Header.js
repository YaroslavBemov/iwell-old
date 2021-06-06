import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./icons/Logo";
import UserIcon from "../../assets/icons/UserIcon";
import BellIcon from "./icons/BellIcon";
import Login from "../Login";

const Header = () => {
  const [login, setLogin] = useState({ login: false });

  const openLogin = () => setLogin({ ...login, login: true });
  const closeLogin = () => setLogin({ ...login, login: false });

  return (
    <header className="flex justify-between items-center">
      <Link to="/"><Logo /></Link>
      <nav>
        <Link to="/training">Тренировки</Link>
        <Link to="/tariffs">Тарифы</Link>
        <Link to="/schedule">Расписание</Link>
        <Link to="/registration">Присоединиться</Link>
      </nav>
      <div>
        <button className="mr-30" onClick={openLogin}><UserIcon /></button>
        <Link to="/bells"><BellIcon /></Link>
      </div>
      <Login 
        isOpened={login.login}
        closeLogin={closeLogin}
      />
    </header>
  );
};

export default Header;
