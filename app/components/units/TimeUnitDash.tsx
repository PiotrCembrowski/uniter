"use client";

import { useEffect, useState } from "react";
import TimeUnitCard, { Values } from "./TimeUnitCard";
import { useAppSelector } from "@/store/hooks";

const TimeUnitDash = () => {
  const timeState = useAppSelector((state) => state.timeSlice.units);

  const [values, setValues] = useState<Values>({
    unit1: timeState,
    unit2: timeState / 1e-12,
    unit3: timeState / 1e-9,
    unit4: timeState / 1e-6,
    unit5: timeState / 0.001,
    unit6: timeState / 1,
    unit7: timeState / 60,
    unit8: timeState / 3600,
    unit9: timeState / 86400,
  });

  useEffect(() => {
    setValues({
      unit1: timeState,
      unit2: timeState / 1e-12,
      unit3: timeState / 1e-9,
      unit4: timeState / 1e-6,
      unit5: timeState / 0.001,
      unit6: timeState / 1,
      unit7: timeState / 60,
      unit8: timeState / 3600,
      unit9: timeState / 86400,
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
