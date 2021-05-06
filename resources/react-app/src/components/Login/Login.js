import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
// import facebook from '../../assets/icons/facebook.svg';

const Login = (props) => {
    return (
        <div className='login'>
            <h1 className='login__title'>Вход / регистрация</h1>
            <div className='login__logo-wrapper'>
                <img alt="facebook-logo" />
                <img alt="vk-logo" />
                <img alt="google-logo" />
            </div>
            <p className='login__text'>или</p>
            <form className='login__form'>
                <input className='login__form-input' type="email" placeholder="Введите свой E-mail" />
                <button className='login__form-btn'>Продолжить</button>
            </form>
            <p className='login__small-text'>Продолжая, Вы соглашаетесь с <Link className='login__link' to='/conditions'>Условиями</Link> и <Link className='login__link' to='/privacy_policy'>Политикой конфиденциальности</Link></p>
        </div>
    );
};

export default Login;
