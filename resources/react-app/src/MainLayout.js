import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./containers/Router";

function MainLayout() {
    return (
        <Router />
    );
}

if (document.getElementById("root")) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <MainLayout />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    );
}

export default MainLayout;