"use client";

import React, { useEffect } from "react";
import UnitCard, { ValuesMetric } from "./UnitCard";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";

const UnitDash = () => {
  const showValue = useAppSelector((state) => state.units);

  useEffect(() => {
    console.log(showValue);
  }, [showValue]);

  const [metricValue, setMetricValue] = useState<ValuesMetric>({
    unit1: showValue,
    unit2: showValue * 0.1,
    unit3: showValue * 0.01,
    unit4: showValue * 0.001,
    unit5: showValue * 0.000001,
  });

  const [imperialValue, setImperialValue] = useState<ValuesMetric>({
    unit1: showValue,
    unit2: showValue * 0.083,
    unit3: showValue * 0.0277778,
    unit4: showValue * 0.000568182,
    unit5: showValue * 0.000015783,
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <UnitCard title="Metric System" value={metricValue} />
      <UnitCard title="Imperial System" value={imperialValue} />
      <UnitCard title="Sea Metric" />
      <UnitCard title="Astronomic Metric" />
    </div>
  );
};

export default UnitDash;
