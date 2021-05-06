import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  return (
    <div id="app">
      <Header />
      <Navbar />
      <Content>
        Вставляем через Switch -- Route path="/ " компоненты страниц
      </Content>
    </div>
  );
}

export default App;