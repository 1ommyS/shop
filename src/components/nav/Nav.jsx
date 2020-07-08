import React from 'react';
import {connect} from "react-redux";
import {authUser, logout} from "../../redux/reducers/authReducer";
import {NavLink} from "react-router-dom";
import './Nav.scss';
import logo from '../../assets/images/logo.png';

const Nav = (props) => {
    return (
        <nav className="navigation">
            <div className="navigation__image">
                <img src={logo} alt=""/>
            </div>
            <div className="navigation__menu">
                <ul className="menu__list">
                    <li className="list__item"><NavLink to={'/'} exact>Home</NavLink></li>
                    <li className="list__item"><NavLink to={'/products'}>Products</NavLink></li>
                    <li className="list__item">
                        {props.isAuth ? <NavLink to={"profile"}>Profile</NavLink> : <NavLink to={'/login'}>Authorisation</NavLink>}
                    </li>
                </ul>
            </div>
        </nav>
    )
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {logout, authUser})(Nav);

