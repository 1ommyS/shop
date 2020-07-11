import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getUserByID} from "../../../redux/reducers/userReducer";
import {CircularProgress} from "@material-ui/core";
import Profile from "./Profile";

const  ProfileContainer = (props) =>  {
    const id = document.cookie.split("=")[1];

    useEffect(() => props.getUserByID(id),[])

    return (
        <>
            {props.isLoading ? <CircularProgress/> : <Profile/>}
        </>
    )
}

const mapStateToProps = (state) => ({
    data: state.profile.users,
    isLoading: state.profile.loading
})
export default connect(mapStateToProps, {getUserByID})(ProfileContainer);