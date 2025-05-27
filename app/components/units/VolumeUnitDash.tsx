"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { useAppSelector } from "@/store/hooks";
import VolumeUnitCard, { Values } from "./VolumeUnitCard";

const VolumeUnitDash = () => {
  const showMetricValue = useAppSelector(
    (state) => state.volumeSlice.metric.units
  );
  const showImperialValue = useAppSelector(
    (state) => state.volumeSlice.imperial.units
  );
  const showKitchenValue = useAppSelector(
    (state) => state.volumeSlice.kitchen.units
  );
  const showAmericanValue = useAppSelector(
    (state) => state.volumeSlice.american.units
  );

  const [metricValue, setMetricValue] = useState<Values>();
  const [imperialValue, setImperialValue] = useState<Values>();
  const [kitchenValue, setKitchenValue] = useState<Values>();
  const [americanValue, setAmericanValue] = useState<Values>();

  useEffect(() => {
    setMetricValue({
      unit1: showImperialValue * 0.001,
      unit2: showImperialValue * 0.01,
      unit3: showImperialValue * 0.1,
      unit4: showImperialValue,
      unit5: showImperialValue * 1000,
    });

    setImperialValue({
      unit1: showImperialValue / 0.0284130625,
      unit2: showImperialValue / 0.56826125,
      unit3: showImperialValue / 1.1365225,
      unit4: showImperialValue / 4.54609,
      unit5: showImperialValue / 36.36872,
    });

    setKitchenValue({
      unit1: showKitchenValue / 0.005,
      unit2: showKitchenValue / 0.015,
      unit3: showKitchenValue / 0.25,
      unit4: showKitchenValue / 0.284,
      unit5: showKitchenValue / 0.24,
      unit6: showKitchenValue / 0.2,
      unit7: showKitchenValue / 0.02,
    });

    setAmericanValue({
      unit1: showAmericanValue / 0.0295735,
      unit2: showAmericanValue / 0.473176,
      unit3: showAmericanValue / 0.55061,
      unit4: showAmericanValue / 0.946353,
      unit5: showAmericanValue / 1.10122,
      unit6: showAmericanValue / 3.78541,
      unit7: showAmericanValue / 4.40488,
      unit8: showAmericanValue / 35.2391,
      unit9: showAmericanValue / 158.987294928,
    });
  }, [showMetricValue, showImperialValue, showKitchenValue, showAmericanValue]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <VolumeUnitCard title="Metric System" value={metricValue} />
      <VolumeUnitCard title="Imperial System" value={imperialValue} />
      <VolumeUnitCard title="Kitchen System" value={kitchenValue} />
      <VolumeUnitCard title="American System" value={americanValue} />
    </div>
  );
};

export default VolumeUnitDash;
