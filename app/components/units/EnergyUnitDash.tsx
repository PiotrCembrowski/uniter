"use client";

import { useEffect, useState } from "react";
import TimeUnitCard, { Values } from "./TimeUnitCard";
import { useAppSelector } from "@/store/hooks";

const EnegyUnitDash = () => {
  const energyMetricState = useAppSelector(
    (state) => state.energySlice.metric.units
  );
  const energyImperialState = useAppSelector(
    (state) => state.energySlice.imperial.units
  );
  const energyCaloriesState = useAppSelector(
    (state) => state.energySlice.calories.units
  );
  const energyAtomicState = useAppSelector(
    (state) => state.energySlice.atomic.units
  );

  const [metricStateValues, setMetricStateValues] = useState<Values>({
    unit1: energyMetricState / 1e-12,
    unit2: energyMetricState / 1e-9,
    unit3: energyMetricState / 1e-6,
    unit4: energyMetricState / 0.001,
    unit5: energyMetricState,
    unit6: energyMetricState / 60,
    unit7: energyMetricState / 3600,
    unit8: energyMetricState / 86400,
  });

  const [imeprialValues, setImperialValues] = useState<Values>({
    unit1: energyImperialState / 604800,
    unit2: energyImperialState / 2592000,
    unit3: energyImperialState / 31536000,
    unit4: energyImperialState / 31622400,
    unit5: energyImperialState / 31557600,
    unit6: energyImperialState / 315576000,
    unit7: energyImperialState / 3155760000,
    unit8: energyImperialState / 31557600000,
  });

  const [caloriesValues, setCaloriesValues] = useState<Values>({
    unit1: energyCaloriesState / 1e-12,
    unit2: energyCaloriesState / 1e-9,
    unit3: energyCaloriesState / 1e-6,
    unit4: energyCaloriesState / 0.001,
    unit5: energyCaloriesState,
    unit6: energyCaloriesState / 60,
    unit7: energyCaloriesState / 3600,
    unit8: energyCaloriesState / 86400,
  });
  const [atomicValues, setAtomicValues] = useState<Values>({
    unit1: energyAtomicState / 604800,
    unit2: energyAtomicState / 2592000,
    unit3: energyAtomicState / 31536000,
    unit4: energyAtomicState / 31622400,
    unit5: energyAtomicState / 31557600,
    unit6: energyAtomicState / 315576000,
    unit7: energyAtomicState / 3155760000,
    unit8: energyAtomicState / 31557600000,
  });

  useEffect(() => {
    setMetricStateValues({
      unit1: energyMetricState / 1e-12,
      unit2: energyMetricState / 1e-9,
      unit3: energyMetricState / 1e-6,
      unit4: energyMetricState / 0.001,
      unit5: energyMetricState,
      unit6: energyMetricState / 60,
      unit7: energyMetricState / 3600,
      unit8: energyMetricState / 86400,
    });

    setImperialValues({
      unit1: energyImperialState / 604800,
      unit2: energyImperialState / 2592000,
      unit3: energyImperialState / 31536000,
      unit4: energyImperialState / 31622400,
      unit5: energyImperialState / 31557600,
      unit6: energyImperialState / 315576000,
      unit7: energyImperialState / 3155760000,
      unit8: energyImperialState / 31557600000,
    });

    setCaloriesValues({
      unit1: energyCaloriesState / 1e-12,
      unit2: energyCaloriesState / 1e-9,
      unit3: energyCaloriesState / 1e-6,
      unit4: energyCaloriesState / 0.001,
      unit5: energyCaloriesState,
      unit6: energyCaloriesState / 60,
      unit7: energyCaloriesState / 3600,
      unit8: energyCaloriesState / 86400,
    });
    setAtomicValues({
      unit1: energyAtomicState / 604800,
      unit2: energyAtomicState / 2592000,
      unit3: energyAtomicState / 31536000,
      unit4: energyAtomicState / 31622400,
      unit5: energyAtomicState / 31557600,
      unit6: energyAtomicState / 315576000,
      unit7: energyAtomicState / 3155760000,
      unit8: energyAtomicState / 31557600000,
    });
  }, [
    energyMetricState,
    energyImperialState,
    energyCaloriesState,
    energyAtomicState,
  ]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <TimeUnitCard title="Metric System" values={metricStateValues} />
      <TimeUnitCard title="Imperial System" values={imeprialValues} />
      <TimeUnitCard title="Calories" values={caloriesValues} />
      <TimeUnitCard title="Atomic" values={atomicValues} />
    </div>
  );
};

export default EnegyUnitDash;
