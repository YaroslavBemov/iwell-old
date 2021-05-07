import React from "react";
import { Route, Switch } from "react-router-dom";
import Account from "../components/Account";
import Login from "../components/Login/Login";

const Router = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Account} />
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};

export default Router;
