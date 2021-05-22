import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Login.scss";
import CloseButton from "./icons/CloseButton";
import FacebookIcon from "./icons/FacebookIcon";
import VkIcon from "./icons/VkIcon";
import GoogleIcon from "./icons/GoogleIcon";

const Login = ({ isOpened, closeLogin }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleChange = (event) => event.target.value;

    const onSubmit = data => console.log(data);

    return (
        <div className={`login ${isOpened ? "open" : "close"}`}>
            <button className="login__close-btn" onClick={closeLogin}>
                <CloseButton />
            </button>
            <form className="login__wrapper" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="login__title">Вход</h1>
                <div className="login__logo-wrapper mt-70">
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
                <p className="login__text mt-70">или</p>
                <input
                    {...register("email", { required: true, pattern: /.+@.+\..+/i })}
                    name="email"
                    className="login__form-input mt-20"
                    type="email"
                    placeholder="Введите свой E-mail"
                    onChange={handleChange}
                />
                {errors.email && <p className="login__errors-message mt-10">Введите Ваш Email</p>}
                <input
                    {...register("password", { required: true, minLength: 6 })}
                    name="password"
                    className="login__form-input mt-20"
                    type="password"
                    placeholder="Введите пароль"
                    onChange={handleChange}
                />
                {errors.password && <p className="login__errors-message mt-10">Введите Ваш пароль - минимум 6 символов</p>}
                <button className="login__form-btn mt-40" type="submit">
                    Войти
                </button>
                <p className="login__small-text mt-20">
                    Продолжая, Вы соглашаетесь с{" "}
                    <Link className="login__link" to="/conditions">
                        Условиями
                    </Link>{" "}
                    и{" "}
                    <Link className="login__link" to="/privacy_policy">
                        Политикой конфиденциальности
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
