import React from 'react';
import './App.scss';
import Nav from "./components/nav/Nav";
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Products from "./components/pages/products/Products";
import Profile from "./components/pages/profile/Profile";
import Authorisation from "./components/pages/auth/Authorisation";

function App() {
  return (
    <>
      <Nav/>
      <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/products"}  component={Products}/>
          <Route path={"/profile"}  component={Profile}/>
          <Route path={"/login"} component={Authorisation}/>
      </Switch>
      </>
  )
}

export default App;
