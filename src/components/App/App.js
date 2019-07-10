import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import userService from "../../utils/userService";
// import tokenService from "../../utils/tokenService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route
            exact
            path="/login"
            render={props => <LoginPage {...props} />}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <SignupPage
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={props =>
              userService.getUser() ? (
                <Dashboard
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
