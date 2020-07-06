import React, {useState} from 'react';
import "./Authorisation.scss";
import {connect} from "react-redux";
import {authUser} from "../../../redux/reducers/authReducer";

const Authorisation = (props) => {
    const [login, setFormType] = useState(true);
    const [error, setError] = useState("");
    const [authError, _] = useState(props.error);


    const LoginHandler = (login, password, rememberMe) => {
        // if (!validateForm(login, password)) {
        //     setError("Заполните поля формы");
        //     return;
        // }
        setError("");
        props.authUser(login, password);
    }

    const RegisterHandler = (login, password) => {
        if (login.length !== 0 && password.length !== 0) alert("Заполните поля формы !");
    }

    return (
        <div className="container">
            {
                login ?
                    <Login authError={authError} error={error} setFormType={setFormType} LoginHandler={LoginHandler}/> :
                    <Register setFormType={setFormType}/>
            }
        </div>
    )
}

const Login = ({setFormType, LoginHandler, error, authError}) => {

    const [inputValues, setInputValues] = useState({
        login: "",
        password: "",
        rememberMe: false
    });
    window.ii = inputValues;

    return (
        <form className={"form"} onSubmit={e => {
            e.preventDefault();
            LoginHandler(inputValues.login, inputValues.password)
        }}>
            {error.length !== 0 && <span className="form__error">{error}</span>}
            {authError.length !== 0 && <span className="form__error">{authError}</span>}
            <h1 className={"form__title"}>Вход</h1>

            <div className={"form__group"}>
                <input
                    type={"text"}
                    value={inputValues.login}
                    className={"form__control"}
                    placeholder=" "
                    onChange={(e) => setInputValues({...inputValues, login: e.target.value})}
                /><label
                className="form__label">Логин</label>
            </div>
            <div className={"form__group"}>
                <input
                    value={inputValues.password}
                    type={"password"}
                    className={"form__control"}
                    placeholder=" "
                    onChange={e => setInputValues({...inputValues, password: e.target.value})}
                /><label
                className="form__label">Пароль</label>
            </div>
            <div>
                <input type="checkbox" onClick={e => setInputValues({rememberMe: !inputValues.rememberMe})}/><label>Запомнить
                меня</label>
            </div>

            <button className={"form__button"} type="submit">Войти</button>

            <div className="form__links">
                <a
                    className="form__link"
                    onClick={(e) => {
                        e.preventDefault();
                        setFormType(false);
                    }}
                >
                    Регистрация
                </a>
            </div>
        </form>);
}
const Register = ({setFormType}) => {
    return (
        <form className={"form"}>
            <h1 className={"form__title"}>Регистрация</h1>

            <div className={"form__group"}>
                <input type={"text"} className={"form__control"} placeholder=" "/><label
                className="form__label">Логин</label>
            </div>

            <div className={"form__group"}>
                <input type={"password"} className={"form__control"} placeholder=" "/><label
                className="form__label">Пароль</label>
            </div>

            <button className={"form__button"}>Зарегистрироваться</button>

            <div className="form__links">
                <a
                    className="form__link"
                    onClick={(e) => {
                        e.preventDefault();
                        setFormType(true);
                    }}
                >
                    Авторизация
                </a>
            </div>
        </form>
    )
}
export const mapStateToProps = state => ({
    error: state.auth.error
})

export default connect(mapStateToProps, {authUser})(Authorisation);