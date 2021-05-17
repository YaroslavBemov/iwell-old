import React, { useState } from "react";
import "./Login.scss";
import CloseButton from "./icons/CloseButton";
import LoginEmailStep from "./Steps/LoginEmailStep";
import LoginPasswordStep from "./Steps/LoginPasswordStep";
import LoginPayStep from "./Steps/LoginPayStep";

const Login = ({ isOpened, closeLogin }) => {
    const [formState, setFormState] = useState({
        currentStep: 1,
        username: "",
        email: "",
        password: "",
        phone: "",
    });

    // console.log(formState);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password, phone } = formState;
        console.log(formState);
    };

    const _next = () => {
        let currentStep = formState.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        setFormState({
            ...formState,
            currentStep: currentStep,
        });
    };

    return (
        <div className={`login ${isOpened ? "open" : "close"}`}>
            <button className="login__close-btn" onClick={closeLogin}>
                <CloseButton />
            </button>
            <form className="login__wrapper" onSubmit={handleSubmit}>
                <LoginEmailStep
                    currentStep={formState.currentStep}
                    handleChange={handleChange}
                    email={formState.email}
                >
                    <button className="login__form-btn" onClick={_next}>
                        Продолжить
                    </button>
                </LoginEmailStep>
                <LoginPasswordStep
                    currentStep={formState.currentStep}
                    handleChange={handleChange}
                    password={formState.password}
                >
                    <button className="login__form-btn" onClick={_next}>Войти</button>
                </LoginPasswordStep>
                <LoginPayStep
                    currentStep={formState.currentStep}
                    handleChange={handleChange}
                    username={formState.username}
                    email={formState.email}
                    phone={formState.phone}
                >
                    <button className="login__form-btn">Оплатить</button>
                </LoginPayStep>
            </form>
        </div>
    );
};

export default Login;
