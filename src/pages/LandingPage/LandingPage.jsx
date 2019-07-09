import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return ( 
  <div>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Link to='/dashboard'>dashboard</Link>
  </div>
   );
}
 
export default LandingPage;