import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ClientRegistration from "./ClientRegistration";
import SpecialistRegistration from "./SpecialistRegistration";
import "./Registration.scss";

const Registration = () => {
    return (
        <div className="registration">
            <div className="flex justify-center">
                <Link
                    to="/registration/client"
                    className="registration__nav-link mr-40"
                >
                    Клиент
                </Link>
                <Link
                    to="/registration/specialist"
                    className="registration__nav-link"
                >
                    Специалист
                </Link>
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
