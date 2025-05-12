"use client";

import Header from "./header/Header";
import LengthDash from "./units/LengthUnitDash";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="p-6">
        <LengthDash />
      </div>
    </div>
  );
};

export default Dashboard;
