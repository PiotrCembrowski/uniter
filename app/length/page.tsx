import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const LengthDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="length" />
      <div>
        <Dashboard dashType="length" />
      </div>
    </div>
  );
};

export default LengthDash;
