import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import userService from "../../utils/userService";
import cellarService from '../../utils/cellarService';
// import tokenService from "../../utils/tokenService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      cellars: []
    };
  }

  async populateCellars() {
    await cellarService.cellarIndex();
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleUpdateCellars = (cellars) => {
    this.setState({ cellars });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <SignupPage
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) =>
              userService.getUser() ? (
                <Dashboard
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  handleUpdateCellars={this.handleUpdateCellars}
                  cellars={this.state.cellars}
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
