"use client";

import React, { useEffect } from "react";
import UnitCard, { Values } from "./MassUnitCard";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";

const MassUnitDash = () => {
  const showImperialValue = useAppSelector((state) => state.massSlice.metric);
  const showMetricValue = useAppSelector((state) => state.massSlice.imperial);
  const showAtomicValue = useAppSelector((state) => state.massSlice.seaMetric);
  const showOtherValue = useAppSelector(
    (state) => state.massSlice.astronomicMetric
  );

  const [metricValue, setMetricValue] = useState<Values>();
  const [imperialValue, setImperialValue] = useState<Values>();
  const [atomicValue, setAtomicValue] = useState<Values>();
  const [otherValue, setOtherValue] = useState<Values>();

  useEffect(() => {
    setMetricValue({
      unit1: showMetricValue / 0.000001,
      unit2: showMetricValue / 0.001,
      unit3: showMetricValue / 0.1,
      unit4: showMetricValue / 1,
      unit5: showMetricValue / 1000,
    });
    setImperialValue({
      unit1: showImperialValue * 0.0283495,
      unit2: showImperialValue * 0.453592,
      unit3: showImperialValue * 6.35029318,
      unit4: showImperialValue * 45.359237,
      unit5: showImperialValue * 50.80234544,
      unit6: showImperialValue * 907.18474,
      unit7: showImperialValue * 1016.0469088,
      unit8: showImperialValue * 0.00006479891,
    });
    setAtomicValue({
      unit1: showAtomicValue * 1.6605390666e-27,
      unit2: showAtomicValue * 1.78266192e-30,
      unit3: showAtomicValue * 2.176434e-8,
    });
    setOtherValue({
      unit1: showOtherValue * 0.0002,
      unit2: showOtherValue * 100,
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
