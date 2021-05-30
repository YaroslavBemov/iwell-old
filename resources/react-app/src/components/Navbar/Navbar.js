import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [clients, setClients] = useState(false);
  const [classes, setClasses] = useState(false);
  const [schedule, setSchedule] = useState(false);

  const toggleVisibility = () => {
    setClients(false);
    setClasses(false);
    setSchedule(false);
  };

  return (
    <aside>
      <div className="user">
        <img src={"http://placehold.it/260x260"} style={{ width: 260, height: 260 }}/>
        <p className="text-base">Наталия Барсенева</p>
      </div>
      <nav className="mt-40">
        <Link to="/clients"
          onClick={ () => {
            setClients(true);
            setClasses(false);
            setSchedule(false);
          }}>
            Мои клиенты
        </Link>
          {clients && (
            <div className="flex flex-col items-start ml-40">
              <NavLink to="/clients/active" activeClassName="selected">Активные</NavLink>
              <NavLink to="/clients/notactive" activeClassName="selected">Неактивные</NavLink>
            </div>
          )}
        <Link to="/classes"
          onClick={ () => {
            setClients(false);
            setClasses(true);
            setSchedule(false);
          }}>
            Мои занятия
        </Link>
          {classes && (
            <div className="flex flex-col items-start ml-40">
              <NavLink to="/classes/next" activeClassName="selected">Будущие</NavLink>
              <NavLink to="/classes/last" activeClassName="selected">Прошедшие</NavLink>
            </div>
          )}
        <Link to="/schedule_active" 
          onClick={ () => {
            setClients(false);
            setClasses(false);
            setSchedule(true);
          }}> 
            Мое расписание
        </Link>
          {schedule && (
            <div className="flex flex-col items-start ml-40">
              <NavLink to="/schedule_active" activeClassName="selected">Активное</NavLink>
              <NavLink to="/schedule_notactive" activeClassName="selected">Неактивное</NavLink>
              <NavLink to="/calendar" activeClassName="selected">Календарь</NavLink>
            </div>
          )}
        <Link to="/info" onClick={toggleVisibility}>
            Информация
        </Link>
      </nav>
    </aside>
  );
};

export default Navbar;
