import React from "react";

const Login = ({setLoginForm, LoginHandler, error, authError, inputValues, setInputValues}) => {

    return (
        <form className={"form"} method="post" onSubmit={e => {
            e.preventDefault();
            LoginHandler(inputValues.login, inputValues.password, inputValues.rememberMe)
        }}>
            {error.length !== 0 && <span className="form__error">{error}</span>}
            <h1 className={"form__title"}>Вход</h1>

            <div className={"form__group"}>
                <input
                    type={"text"}
                    value={inputValues.login}
                    className={"form__control"}
                    placeholder=" "
                    required
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
                    required
                    onChange={e => setInputValues({...inputValues, password: e.target.value})}
                /><label
                className="form__label">Пароль</label>
            </div>
            <div>
                <input type="checkbox" onClick={e => setInputValues({rememberMe: !inputValues.rememberMe})}
                       onChange={e => setInputValues({...inputValues, rememberMe: !inputValues.rememberMe})}/><label>Запомнить
                меня</label>
            </div>

            <button className={"form__button"} type="submit">Войти</button>

            <div className="form__links">
                <a
                    className="form__link"
                    onClick={(e) => {
                        e.preventDefault();
                        setLoginForm(false);
                    }}
                >
                    Регистрация
                </a>
            </div>
        </form>);
}
export default Login;