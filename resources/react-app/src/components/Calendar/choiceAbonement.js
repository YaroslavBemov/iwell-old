import React from "react";
import "./calendar.scss";

const ChoiceAbonement = ({ title }) => {

  return (
    <div className="calendar">
      <h1>{title}</h1>
      <p>Введите номер абонемента клиента</p>
 
      <div className={`${activeButton ? "visible" : "invisible"} flex justify-between items-center mt-40`}>
        <span className="dark-grey-text">Не больше 1 заказа</span>
        <button className="button">Продолжить</button>
      </div>
    </div>
  );
};

export default ChoiceAbonement;
