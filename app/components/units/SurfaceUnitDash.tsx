"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import SurfaceUnitCard, { Values } from "./SurfaceUnitCard";

const SurfaceUnitDash = () => {
  const metricState = useAppSelector(
    (state) => state.surfaceSlice.metric.units
  );
  const imperialState = useAppSelector(
    (state) => state.surfaceSlice.imperial.units
  );

  const [metricStateValues, setMetricStateValues] = useState<Values>({
    unit1: metricState * 0.000001,
    unit2: metricState * 0.0001,
    unit3: metricState * 0.01,
    unit4: metricState,
    unit5: metricState * 1000000,
    unit6: metricState / 100,
    unit7: metricState / 10000,
  });

  const [imperialValues, setImperialValues] = useState<Values>({
    unit1: imperialState / 0.00064516,
    unit2: imperialState / 0.09290304,
    unit3: imperialState / 0.83612736,
    unit4: imperialState / 2589988.110336,
    unit5: imperialState / 4046.8564224,
    unit6: imperialState / 24046.87261,
  });

  useEffect(() => {
    setMetricStateValues({
      unit1: metricState / 0.000001,
      unit2: metricState / 0.0001,
      unit3: metricState / 0.01,
      unit4: metricState,
      unit5: metricState / 1000000,
      unit6: metricState / 100,
      unit7: metricState / 10000,
    });

    setImperialValues({
      unit1: imperialState / 0.00064516,
      unit2: imperialState / 0.09290304,
      unit3: imperialState / 0.83612736,
      unit4: imperialState / 2589988.110336,
      unit5: imperialState / 4046.8564224,
      unit6: imperialState / 4046.87261,
    });
  }, [metricState, imperialState]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <SurfaceUnitCard title="Metric System" values={metricStateValues} />
      <SurfaceUnitCard title="Imperial System" values={imperialValues} />
    </div>
  );
};

export default SurfaceUnitDash;
