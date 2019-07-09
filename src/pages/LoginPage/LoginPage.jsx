import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from '../../utils/userService';

class LoginPage extends Component {
  state = {
    email: "",
    pw: ""
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
      this.props.updateMessage('Invalid Credentials');
    }
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Link to="/dashboard">Go</Link>
      </div>
    );
  }
}

export default LoginPage;
