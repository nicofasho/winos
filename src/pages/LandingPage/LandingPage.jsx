import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Link to="/signup" className="btn btn-primary">
        Signup
      </Link>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
    </div>
  );
};

export default LandingPage;
