"use client";

import React, { useEffect } from "react";
import UnitCard, { ValuesMetric } from "./LengthUnitCard";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";

const MassUnitDash = () => {
  const showImperialValue = useAppSelector((state) => state.massSlice.metric);
  const showMetricValue = useAppSelector((state) => state.massSlice.imperial);
  const showAtomicValue = useAppSelector((state) => state.massSlice.seaMetric);
  const showOtherValue = useAppSelector(
    (state) => state.massSlice.astronomicMetric
  );

  const [metricValue, setMetricValue] = useState<ValuesMetric>();
  const [imperialValue, setImperialValue] = useState<ValuesMetric>();
  const [atomicValue, setAtomicValue] = useState<ValuesMetric>();
  const [otherValue, setOtherValue] = useState<ValuesMetric>();

  useEffect(() => {
    setMetricValue({
      unit1: showMetricValue * 0.000001,
      unit2: showMetricValue * 0.001,
      unit3: showMetricValue * 0.1,
      unit4: showMetricValue * 1,
      unit5: showMetricValue * 1000,
    });
    setImperialValue({
      unit1: showImperialValue,
      unit2: showImperialValue * 0.083,
      unit3: showImperialValue * 0.0277778,
      unit4: showImperialValue * 0.000568182,
      unit5: showImperialValue * 0.000015783,
    });
  }, [showMetricValue, showImperialValue, showAtomicValue, showOtherValue]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <UnitCard title="Metric System" value={metricValue} />
      <UnitCard title="Imperial System" value={imperialValue} />
      <UnitCard title="Atomic System" value={atomicValue} />
      <UnitCard title="Other" value={otherValue} />
    </div>
  );
};

export default MassUnitDash;
