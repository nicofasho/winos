import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import LandingPage from '../../pages/LandingPage/LandingPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/signup" render={() => <SignupPage />} />
        <Route exact path="/dashboard" render={() => <Dashboard />} />
      </Switch>
    </div>
  );
}

export default App;
