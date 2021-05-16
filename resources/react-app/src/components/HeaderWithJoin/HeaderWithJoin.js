import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoLight from "./icons/LogoLight";
import UserLightIcon from "./icons/UserLightIcon";
import Login from "../Login";
import './HeaderWithJoin.scss';

const HeaderWithJoin = () => {
  const [login, setLogin] = useState({
    login: false,
  });

  const openLogin = () => {
    setLogin({
      ...login,
      login: true,
    });
  };

  const closeLogin = () => {
    setLogin({
      ...login,
      login: false,
    });
  };

  return (
    <header className="flex justify-between items-center header">
      <Link to="/"><LogoLight /></Link>
      <nav>
        <Link to="/training">Тренировки</Link>
        <Link to="/tariffs">Тарифы</Link>
        <Link to="/schedule">Расписание</Link>
        <Link to="/schedule">Присоединиться</Link>
      </nav>
      <div className='header__rightbox'>
        <Link to="/user" className="mr-30"><UserLightIcon /></Link>
        <button onClick={openLogin}>Личный кабинет</button>
      </div>     
      <Login 
        isOpened={login.login}
        closeLogin={closeLogin}
      />
    </header>
  );
};

export default HeaderWithJoin;
