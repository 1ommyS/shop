import React from 'react';
import './App.scss';
import Nav from "./components/nav/Nav";
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import Profile from "./components/pages/profile/Profile";
import AuthorisationContainer from "./components/pages/auth/Authorisation.Container";

function App() {
  return (
    <>
      <Nav/>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/products"}  component={Products}/>
          <Route path={"/profile"} exact component={Profile}/>
          <Route path={"/login"} component={AuthorisationContainer}/>
      </Switch>
      </>
  )
}

export default App;
