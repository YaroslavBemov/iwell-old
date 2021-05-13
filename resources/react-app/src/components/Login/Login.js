import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import FacebookIcon from "./icons/FacebookIcon";
import VkIcon from "./icons/VkIcon";
import GoogleIcon from "./icons/GoogleIcon";

const Login = (props) => {
    return (
        <div className="login">
            <h1 className="login__title">Вход / регистрация</h1>
            <div className="login__logo-wrapper">
                <a
                    className="login__logo-facebook"
                    href="https://www.facebook.com/"
                    target="_blanc"
                >
                    <FacebookIcon />
                </a>
                <a
                    className="login__logo-vk"
                    href="https://vk.com/"
                    target="_blanc"
                >
                    <VkIcon />
                </a>
                <a
                    className="login__logo-google"
                    href="https://google.com/"
                    target="_blanc"
                >
                    <GoogleIcon />
                </a>
            </div>
            <p className="login__text">или</p>
            <form className="login__form">
                <input
                    className="login__form-input"
                    type="email"
                    placeholder="Введите свой E-mail"
                />
                <button className="login__form-btn">Продолжить</button>
            </form>
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
        </div>
    );
};

export default Login;
