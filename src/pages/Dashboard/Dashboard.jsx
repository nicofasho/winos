import React from "react";
import Nav from "../../components/Nav/Nav";

const Dashboard = (props) => {
  return (
    <div>
      <Nav handleLogout={props.handleLogout} />
      <h2>Dashboard Page</h2>
    </div>
  );
};

export default Dashboard;
