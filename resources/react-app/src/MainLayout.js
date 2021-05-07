import React from "react";
import Router from "./containers/Router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

function MainLayout() {
    return (
        <div id="app">
            <Header />
            <Navbar />
            <Content>
                <Router />
            </Content>
        </div>
    );
}

export default MainLayout;
