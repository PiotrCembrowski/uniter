import React from "react";
import FileCard from "./UnitCard";

const UnitDash = (unitType: string) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <FileCard title="Metric System" unitType={unitType} />
      <FileCard title="Imperial System" unitType={unitType} />
      <FileCard title="Sea Metric" unitType={unitType} />
      <FileCard title="Astronomic Metric" unitType={unitType} />
    </div>
  );
};

export default UnitDash;
