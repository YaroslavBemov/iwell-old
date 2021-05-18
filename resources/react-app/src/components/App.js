import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HeaderWithJoin from "./HeaderWithJoin/HeaderWithJoin";
import Navbar from "./Navbar";
import Content from "./Content";
import Classes from "./Classes";
import Login from "./Login";
import Calendar from "./Calendar";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        {/* <HeaderWithJoin /> */}
        <Navbar />
        <Content>
          <Switch>
            <Route exact path="/" component={Classes}/>
            <Route exact path="/calendar" component={Calendar}/>
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
