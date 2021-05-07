import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../../sass/app.scss";
import MainLayout from "./MainLayout";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
