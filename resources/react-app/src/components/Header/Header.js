import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./icons/Logo";
import UserIcon from "./icons/UserIcon";
import BellIcon from "./icons/BellIcon";
import Login from "../Login";
import Registration from "../Registration/Registration";

const Header = () => {
  const [login, setLogin] = useState({ login: false });
  const [registration, setRegistration] = useState({ registration: false });

  const openLogin = () => setLogin({ ...login, login: true });
  const openRegistration = () => setRegistration({ ...registration, registration: true });
  const closeLogin = () => setLogin({ ...login, login: false });
  const closeRegistration = () => setRegistration({ ...registration, registration: false });

  return (
    <header className="flex justify-between items-center">
      <Link to="/"><Logo /></Link>
      <nav>
        <Link to="/training">Тренировки</Link>
        <Link to="/tariffs">Тарифы</Link>
        <Link to="/schedule">Расписание</Link>
        <button onClick={openRegistration}>Присоединиться</button>
      </nav>
      <div>
        <button className="mr-30" onClick={openLogin}><UserIcon /></button>
        <Link to="/bells"><BellIcon /></Link>
      </div>
      <Registration 
        isOpened={registration.registration}
        closeRegistration={closeRegistration}
      />
      <Login 
        isOpened={login.login}
        closeLogin={closeLogin}
      />
    </header>
  );
};

export default Header;
