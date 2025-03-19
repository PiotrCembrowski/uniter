"use client";

import React from "react";
import UnitCard, { ValuesMetric } from "./UnitCard";
import { useState } from "react";
import { newState } from "@/store";
import { useDispatch } from "react-redux";

interface UnitDashProps {
  unitType: string;
}

const UnitDash: React.FC<UnitDashProps> = ({ unitType }) => {
  const dispatch = useDispatch();

  const [metricValue, setMetricValue] = useState<ValuesMetric>({
    unit1: 0,
    unit2: 0,
    unit3: 0,
    unit4: 0,
    unit5: 0,
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <UnitCard title="Metric System" unitType={unitType} value={metricValue} />
      <UnitCard title="Imperial System" unitType={unitType} />
      <UnitCard title="Sea Metric" unitType={unitType} />
      <UnitCard title="Astronomic Metric" unitType={unitType} />
    </div>
  );
};

export default UnitDash;
