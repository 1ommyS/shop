import React from 'react';
import "./Authorisation.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Authorisation = (props) => {
    return (
        <div className="container">
            {
                props.loginForm ?
                    <Login authError={props.authError} error={props.error} setLoginForm={props.setLoginForm}
                           LoginHandler={props.LoginHandler} inputValues={props.inputValues} setInputValues={props.setInputValues}/> :
                    <Register setLoginForm={props.setLoginForm} inputValues={props.inputValues} setInputValues={props.setInputValues}
                              error={props.error} RegisterHandler={props.RegisterHandler}/>
            }
        </div>
    )
}

export default Authorisation