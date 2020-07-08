import React from "react";

const Register = ({setFormType, inputValues, setInputValues, error, RegisterHandler}) => {

    return (
        <form className={"form"} onSubmit={e => {
            e.preventDefault();
            RegisterHandler(inputValues.login, inputValues.password)
        }}>
            {error && <h1>{error}</h1>}

            <h1 className={"form__title"}>Регистрация</h1>

            <div className={"form__group"}>
                <input type={"text"} className={"form__control"}
                       onChange={e => setInputValues({...inputValues, login: e.target.value})}
                       placeholder=" "/><label
                className="form__label">Логин</label>
            </div>

            <div className={"form__group"}>
                <input type={"password"} className={"form__control"}
                       onChange={e => setInputValues({...inputValues, password: e.target.value})}
                       placeholder=" "/><label
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
export default Register;