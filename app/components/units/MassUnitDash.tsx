"use client";

import React, { useEffect, useState } from "react";
import UnitCard, { ValuesMetric } from "./LengthUnitCard";
import { useAppSelector } from "@/store/hooks";

const MassUnitDash = () => {
  const showMetricValue = useAppSelector((state) => state.massSlice.metric);

  const showImperialValue = useAppSelector((state) => state.massSlice.imperial);

  useEffect(() => {
    console.log("MassUnitDash", showImperialValue, showImperialValue);
  }, [showImperialValue, showMetricValue]);

  const [metricValue, setMetricValue] = useState<ValuesMetric>();

  const [imperialValue, setImperialValue] = useState<ValuesMetric>();

  useEffect(() => {
    setImperialValue({
      unit1: showImperialValue,
      unit2: showImperialValue * 0.083,
      unit3: showImperialValue * 0.0277778,
      unit4: showImperialValue * 0.000568182,
      unit5: showImperialValue * 0.000015783,
    });
    setMetricValue({
      unit1: showMetricValue,
      unit2: showMetricValue * 0.1,
      unit3: showMetricValue * 0.01,
      unit4: showMetricValue * 0.001,
      unit5: showMetricValue * 0.000001,
    });
  }, [showMetricValue, showImperialValue]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <UnitCard title="Metric System" value={metricValue} />
      <UnitCard title="Imperial System" value={imperialValue} />
      <UnitCard title="Sea Metric" />
      <UnitCard title="Astronomic Metric" />
    </div>
  );
};

export default MassUnitDash;
