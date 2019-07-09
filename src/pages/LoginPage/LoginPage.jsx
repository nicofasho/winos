import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return ( 
    <div>
      <h2>Login</h2>
      <Link to="/dashboard">Go</Link>
    </div>
   );
}
 
export default LoginPage;