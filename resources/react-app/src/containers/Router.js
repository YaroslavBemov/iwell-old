import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../pages/Home/Home";

const Router = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};

export default Router;
