import React from "react";
import Nav from "../../components/Nav/Nav";

const Dashboard = (props) => {
  return (
    <div>
      <Nav handleLogout={props.handleLogout} />
      <h2>Dashboard Page</h2>
      <p>Hello {props.user.username}</p>
    </div>
  );
};

export default Dashboard;
