import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Content from "./Content";
import Classes from "./Classes";
import Calendar from "./Calendar";
import BookEvent from "./Calendar/bookEvent";
import ViewEvent from "./Calendar/viewEvent";
import ClientRegistration from "./Registration/ClientRegistration";
import SpecialistRegistration from "./Registration/SpecialistRegistration";

function App() {
  const [auth, setAuth] = useState(false);
  
  if(!auth) {
    return (
      <Router>
        <Header auth={auth} />
        <Switch>
          <Route path="/client_registration" component={ClientRegistration}/>
          <Route path="/specialist_registration" component={SpecialistRegistration}/>
        </Switch>
      </Router>
    )
  }

  return (
    <Router>
      <Header auth={auth} />
      <Navbar />
      <Content>
        <Switch>
          <Route exact path="/" component={Classes}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/choice" component={BookEvent}/>
          <Route path="/view_event" component={ViewEvent}/>
          {/* <Route path="/subscription" component={Subscription}/>
          <Route path="/info" component={Info}/>
          <Route path="/trainings" component={Trainings}/>
          <Route path="/tariffs" component={Tariffs}/>
          <Route path="/schedule" component={Schedule}/>
          <Route path="/clients" component={Clients}/> 
          <Route path="/login" component={Login}/>*/}
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
