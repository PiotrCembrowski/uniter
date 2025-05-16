"use client";

import PressureUnitCard from "./PressureUnitCard";

const PressureUnitDash = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <PressureUnitCard />
    </div>
  );
};

export default PressureUnitDash;
