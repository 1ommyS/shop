import React, {useState} from 'react';
import "./Authorisation.scss";
import {connect} from "react-redux";
import {authUser} from "../../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import {validateForm} from "../../common/validation";
import {createNewUser} from "../../../redux/reducers/userReducer";
import Authorisation from "./Authorisation";

const AuthorisationContainer = (props) => {
    const [error, setError] = useState("");
    const [inputValues, setInputValues] = useState({
        login: "",
        password: "",
        rememberMe: false
    });
    const [loginForm, setLoginForm] = useState(true);

    const checkForm = (login, password) => {
        if (!validateForm(login, password)) {
            setError("Заполните поля формы");
            return false;
        }
        return true;
    }

    const LoginHandler = (login, password, rememberMe) => {
        setError(' ');
        props.authUser(login, password, rememberMe);
    }

    const RegisterHandler = (login, password) => {
        if (!checkForm) return
        setError(' ');
        props.createNewUser(login, password);
    }

    return (
        <> {props.isAuth && <Redirect to='/profile'/>}
            {props.error && <h1>Произошла ошибка: {props.error}</h1>}
            <Authorisation
                error = {error}
                login={props.login}
                loginForm={loginForm}
                setLoginForm={setLoginForm}
                LoginHandler={LoginHandler}
                inputValues={inputValues}
                setInputValues={setInputValues}
                RegisterHandler={RegisterHandler}
            />
        </>
    )
}

export const mapStateToProps = state => ({
    error: state.auth.error,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {authUser, createNewUser})(AuthorisationContainer);