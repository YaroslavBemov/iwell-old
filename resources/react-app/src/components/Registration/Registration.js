import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CloseButton from "../../assets/icons/CloseButton";
import "./Registration.scss";

const Registration = ({ isOpened, closeRegistration }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleChange = (event) => event.target.value;

    const onSubmit = (data) => console.log(data);

    return (
        <div className={`registration ${isOpened ? "open" : "close"}`}>
            <button className="registration__close-btn" onClick={closeRegistration}>
                <CloseButton />
            </button>
            <form className="registration__wrapper" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="registration__title">Регистрация</h1>
                <input
                    {...register("email", {
                        required: true,
                        pattern: /.+@.+\..+/i,
                    })}
                    name="email"
                    className="registration__form-input mt-20"
                    type="email"
                    placeholder="Введите свой E-mail"
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className="registration__errors-message mt-10">
                        Введите Ваш Email
                    </p>
                )}
                <input
                    {...register("password", { required: true, minLength: 6 })}
                    name="password"
                    className="registration__form-input mt-20"
                    type="password"
                    placeholder="Введите пароль"
                    onChange={handleChange}
                />
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
        </div>
    );
};

export default Registration;
