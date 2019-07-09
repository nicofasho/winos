import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
  state = { 
    name: '',
    email: '',
    password: '',
    passwordConf: ''
   };

   handleChange = e => {
     this.props.updateMessage('');
     this.setState({
       [e.target.name]: e.target.value
     });
   }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/dashboard');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }   

  isFormInvalid() {
    return !(this.state.username && this.state.password === this.state.passwordConf);
  }

  render() { 
    return ( 
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
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
              <label htmlFor="passwordConf">Confirm your Password:</label>
              <input type="password" placeholder="Confirm your Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <div>
              <button disabled={this.isFormInvalid()}>Sign Up</button>
              <Link to="/">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
     );
  }
}
 
export default SignupForm;