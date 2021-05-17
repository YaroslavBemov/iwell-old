import React, { useState } from "react";
import "./Login.scss";
import CloseButton from "./icons/CloseButton";
import LoginEmailStep from "./Steps/LoginEmailStep";

const Login = ({ isOpened, closeLogin }) => {
    const handleSubmit = () => {
        e.preventDefault();
    };

    return (
        <div className={`login ${isOpened ? "open" : "close"}`}>
            <button className="login__close-btn" onClick={closeLogin}>
                <CloseButton />
            </button>
            <form className="login__wrapper" onSubmit={handleSubmit}>
                <LoginEmailStep />
                {/* <h1 className="login__title">Вход / регистрация</h1>
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
                <input
                    className="login__form-input"
                    type="email"
                    placeholder="Введите свой E-mail"
                />
                <button className="login__form-btn">
                    Продолжить
                </button>
                <p className="login__small-text">
                    Продолжая, Вы соглашаетесь с{" "}
                    <Link className="login__link" to="/conditions">
                        Условиями
                    </Link>{" "}
                    и{" "}
                    <Link className="login__link" to="/privacy_policy">
                        Политикой конфиденциальности
                    </Link>
                </p> */}
            </form>
        </div>
    );
};

export default Login;
