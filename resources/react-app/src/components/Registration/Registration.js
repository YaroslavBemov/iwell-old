import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import ClientRegistration from "./ClientRegistration";
import SpecialistRegistration from "./SpecialistRegistration";
import "./Registration.scss";

const Registration = () => {
    return (
        <div className="registration">
            <div className="flex justify-center">
                <NavLink
                    to="/registration/client"
                    className="registration__nav-link mr-40"
                    activeClassName="selected"
                >
                    Клиент
                </NavLink>
                <NavLink
                    to="/registration/specialist"
                    className="registration__nav-link"
                    activeClassName="selected"
                >
                    Специалист
                </NavLink>
            </div>

            <Switch>
                <Route
                    path="/registration/client"
                    component={ClientRegistration}
                />
                <Route
                    path="/registration/specialist"
                    component={SpecialistRegistration}
                />
            </Switch>
        </div>
    );
};

export default Registration;
