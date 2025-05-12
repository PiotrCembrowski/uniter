import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const LengthDash = () => {
  return (
    <div>
      <SideBar />
      <div>
        <Dashboard />
      </div>
    </div>
  );
};

export default LengthDash;
