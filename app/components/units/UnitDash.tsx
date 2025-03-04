import React from "react";
import FileCard from "./UnitCard";

const UnitDash = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <FileCard title="Metric System" unitType="length" />
      <FileCard title="Imperial System" unitType="length" />
      <FileCard title="Sea Metric" unitType="length" />
      <FileCard title="Astronomic Metric" unitType="length" />
    </div>
  );
};

export default UnitDash;
