"use client";

import { useEffect, useState } from "react";
import TimeUnitCard, { Values } from "./TimeUnitCard";
import { useAppSelector } from "@/store/hooks";

const TimeUnitDash = () => {
  const timeState = useAppSelector((state) => state.timeSlice.units);

  const [values, setValues] = useState<Values>({
    unit1: timeState / 1e-12,
    unit2: timeState / 1e-9,
    unit3: timeState / 1e-6,
    unit4: timeState / 0.001,
    unit5: timeState,
    unit6: timeState / 60,
    unit7: timeState / 3600,
    unit8: timeState / 86400,
  });

  useEffect(() => {
    setValues({
      unit1: timeState / 1e-12,
      unit2: timeState / 1e-9,
      unit3: timeState / 1e-6,
      unit4: timeState / 0.001,
      unit5: timeState,
      unit6: timeState / 60,
      unit7: timeState / 3600,
      unit8: timeState / 86400,
    });
  }, [timeState]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <TimeUnitCard title="day" values={values} />
      <TimeUnitCard title="More than a day" values={values} />
    </div>
  );
};

export default TimeUnitDash;
