import React from "react";
import UnitCard from "./UnitCard";

const UnitDash = (unitType: string) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <UnitCard title="Metric System" unitType={unitType} />
      <UnitCard title="Imperial System" unitType={unitType} />
      <UnitCard title="Sea Metric" unitType={unitType} />
      <UnitCard title="Astronomic Metric" unitType={unitType} />
    </div>
  );
};

export default UnitDash;
