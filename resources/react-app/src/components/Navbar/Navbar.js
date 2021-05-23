import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <aside>
      <nav>
        <Link to="/">Мои занятия</Link>
        <Link to="/subscription">Мой абонемент</Link>
        <Link to="/active" onClick={toggleVisibility}>
          Мое расписание
        </Link>
        {visible && (
          <div className="flex flex-col ml-40">
            <Link to="/active">Активное</Link>
            <Link to="/notactive">Неактивное</Link>
            <Link to="/calendar">Календарь</Link>
          </div>
        )}
        <Link to="/info">Информация</Link>
      </nav>
    </aside>
  );
};

export default Navbar;
