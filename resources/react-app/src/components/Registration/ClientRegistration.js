import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ClientRegistration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleChange = (event) => event.target.value;

    const onSubmit = (data) => console.log(data);

    return (
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
            <input
                {...register("password", { required: true, minLength: 6 })}
                name="password"
                className="registration__form-input mt-20"
                type="password"
                placeholder="Пароль*"
                onChange={handleChange}
            />
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
                    Введите Ваш Email
                </p>
            )}
            {errors.password && (
                <p className="registration__errors-message mt-10">
                    Введите Ваш пароль - минимум 6 символов
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
    );
};

export default ClientRegistration;
