"use client";

import { useEffect, useState } from "react";
import TimeUnitCard, { Values } from "./TimeUnitCard";
import { useAppSelector } from "@/store/hooks";

const TimeUnitDash = () => {
  const timeState = useAppSelector((state) => state.timeSlice.day);
  const overTimeState = useAppSelector((state) => state.timeSlice.overDay);

  const [dayValues, setDayValues] = useState<Values>({
    unit1: timeState / 1e-12,
    unit2: timeState / 1e-9,
    unit3: timeState / 1e-6,
    unit4: timeState / 0.001,
    unit5: timeState,
    unit6: timeState / 60,
    unit7: timeState / 3600,
    unit8: timeState / 86400,
  });

  const [overDayValues, setOverDayValues] = useState<Values>({
    unit1: overTimeState / 604800,
    unit2: overTimeState / 2592000,
    unit3: overTimeState / 31536000,
    unit4: overTimeState / 31622400,
    unit5: overTimeState / 31557600,
    unit6: overTimeState / 315576000,
    unit7: overTimeState / 3155760000,
    unit8: overTimeState / 31557600000,
  });

  useEffect(() => {
    setDayValues({
      unit1: timeState / 1e-12,
      unit2: timeState / 1e-9,
      unit3: timeState / 1e-6,
      unit4: timeState / 0.001,
      unit5: timeState,
      unit6: timeState / 60,
      unit7: timeState / 3600,
      unit8: timeState / 86400,
    });

    setOverDayValues({
      unit1: overTimeState / 604800,
      unit2: overTimeState / 2592000,
      unit3: overTimeState / 31536000,
      unit4: overTimeState / 31622400,
      unit5: overTimeState / 31557600,
      unit6: overTimeState / 315576000,
      unit7: overTimeState / 3155760000,
      unit8: overTimeState / 31557600000,
    });
  }, [timeState, overTimeState]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <TimeUnitCard title="day" values={dayValues} />
      <TimeUnitCard title="More than a day" values={overDayValues} />
    </div>
  );
};

export default TimeUnitDash;
