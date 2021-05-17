import React from 'react';
import { Link } from "react-router-dom";

const LoginPayStep = ({ currentStep, username, email, phone, handleChange }) => {
    if (currentStep !== 3) {
        return null;
    };

    return ( 
        <>
            <h1 className="login__title-pay">Bronze</h1>
            <p className="login__text-pay">Заполните все поля</p>
            <input
                className="login__form-input"
                type="text"
                placeholder="Имя"
                value={username}
                onChange={handleChange}
            />
            <input
                className="login__form-input"
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={handleChange}
            />
            <input
                className="login__form-input"
                type="phone"
                placeholder="Телефон"
                value={phone}
                onChange={handleChange}
            />
            <button className="login__form-btn">Оплатить</button>
            <p className="login__small-text">
                Продолжая, Вы соглашаетесь с{" "}
                <Link className="login__link" to="/conditions">
                    Условиями
                </Link>{" "}
                и{" "}
                <Link className="login__link" to="/privacy_policy">
                    Политикой конфиденциальности
                </Link>
            </p>
        </>
     );
}
 
export default LoginPayStep;