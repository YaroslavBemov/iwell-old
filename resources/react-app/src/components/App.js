import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";
import Classes from "./Classes";
import HeaderWithJoin from "./HeaderWithJoin/HeaderWithJoin";

function App() {
  return (
    <React.StrictMode>
      <Router>
        {/* <Header /> */}
        <HeaderWithJoin />
        <Navbar />
        <Content>
          <Switch>
            <Route exact path="/" component={Classes}/>
            {/* <Route path="/subscription" component={Subscription}/>
            <Route path="/info" component={Info}/>
            <Route path="/trainings" component={Trainings}/>
            <Route path="/tariffs" component={Tariffs}/>
            <Route path="/schedule" component={Schedule}/>
            <Route exact path="/clients" component={Clients}/>  */}
          </Switch>
        </Content>
      </Router>
    </React.StrictMode>
  );
}

export default App;
