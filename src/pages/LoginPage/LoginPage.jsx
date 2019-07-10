import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from '../../utils/userService';

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    updateMessage: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/dashboard');
    } catch (err) {
      // this.props.updateMessage('Invalid Credentials');
      this.setState({updateMessage: "Invalid Credentials"});
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} >
          <div>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <button>Log In</button>
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
        <p>{this.state.updateMessage}</p>
      </div>
    );
  }
}

export default LoginPage;
