import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getUserByID} from "../../../redux/reducers/userReducer";
import {CircularProgress} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Profile = (props) => {
    const [formData, setformData] = useState({login: props.login, password: ""});
    return (
        <div className = "container">
            <div className = "profile">
                <h1 className = "profile__login">
                    Hello, {props.login}
                </h1>

                <form className = "profile__form" onSubmit = {(e) => {
                    e.preventDefault();
                    props.submitHandler(loginData.login, props.submitHandler)
                }}>
                    <input type = "text" className = "form__control" value = {loginData} placeholder = "Логин" />
                    <input type = "password" className = "form__control" placeholder = "Пароль" />
                    <Button variant = "outlined" type = "submit">Обновить информацию</Button>
                </form>
            </div>
        </div>

    )
}
export default Profile;