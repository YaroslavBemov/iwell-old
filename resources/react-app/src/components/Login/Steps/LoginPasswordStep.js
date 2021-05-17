import React from "react";
import { Link } from "react-router-dom";
import UserLightIcon from "../../../assets/icons/UserLightIcon";

const LoginPasswordStep = ({ children, currentStep, password, handleChange }) => {
    if (currentStep !== 2) {
        return null;
    }

    return (
        <>
            <h1 className="login__title">Добро пожаловать</h1>
            <UserLightIcon className="login__user-icon" />
            <p className="login__text">polsovatel@yandex.ru</p>
            <input
                className="login__form-input"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={handleChange}
            />
            <Link
                className="login__small-text login__link-fogot_password"
                to="/fogot_password"
            >
                Забыли пароль?
            </Link>
            { children }
        </>
    );
};

export default LoginPasswordStep;
