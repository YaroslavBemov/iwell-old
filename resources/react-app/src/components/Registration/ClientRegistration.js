import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import "./Registration.scss";

const ClientRegistration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleChange = (event) => event.target.value;

    const onSubmit = (data) => console.log(data);

    return (
        <div className="registration">
            <div className="flex justify-center">
                <NavLink
                    to="/client_registration"
                    className="registration__nav-link mr-40"
                    activeClassName="selected"
                >
                    Клиент
                </NavLink>
                <NavLink
                    to="/specialist_registration"
                    className="registration__nav-link"
                    activeClassName="selected"
                >
                    Специалист
                </NavLink>
            </div>

            <form
                className="registration__wrapper"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="registration__title">Регистрация</h1>

                <input
                    {...register("name", { required: true })}
                    name="name"
                    className="registration__form-input mt-20"
                    type="text"
                    placeholder="Имя*"
                    onChange={handleChange}
                />

                {errors.email && (
                    <p className="registration__errors-message mt-10">
                        Введите Ваше имя
                    </p>
                )}

                <input
                    {...register("password", { required: true, minLength: 6 })}
                    name="password"
                    className="registration__form-input mt-20"
                    type="password"
                    placeholder="Пароль*"
                    onChange={handleChange}
                />

                {errors.password && (
                    <p className="registration__errors-message mt-10">
                        Введите Ваш пароль - минимум 6 символов
                    </p>
                )}

                <input
                    {...register("email", {
                        required: true,
                        pattern: /.+@.+\..+/i,
                    })}
                    name="email"
                    className="registration__form-input mt-20"
                    type="email"
                    placeholder="E-mail*"
                    onChange={handleChange}
                />

                {errors.email && (
                    <p className="registration__errors-message mt-10">
                        Введите Ваш Email
                    </p>
                )}

                <input
                    {...register("city", { required: true })}
                    name="city"
                    className="registration__form-input mt-20"
                    type="text"
                    placeholder="Город*"
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className="registration__errors-message mt-10">
                        Введите Ваш город
                    </p>
                )}

                <button className="registration__form-btn mt-40" type="submit">
                    Зарегистрироваться
                </button>
                <p className="registration__small-text mt-20">
                    Продолжая, Вы соглашаетесь с{" "}
                    <Link className="registration__link" to="/conditions">
                        Условиями
                    </Link>{" "}
                    и{" "}
                    <Link className="registration__link" to="/privacy_policy">
                        Политикой конфиденциальности
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default ClientRegistration;
