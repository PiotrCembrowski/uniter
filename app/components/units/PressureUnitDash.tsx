"use client";

import { useEffect, useState } from "react";
import PressureUnitCard, { Values } from "./PressureUnitCard";
import { useAppSelector } from "@/store/hooks";

const PressureUnitDash = () => {
  const showState = useAppSelector((state) => state.pressureSlice.units);

  const [values, setValues] = useState<Values>({
    unit1: showState,
    unit2: showState / 100,
    unit3: showState / 100000,
    unit4: showState / 1000000,
    unit5: showState / 9.80665,
    unit6: showState / 98066.5,
    unit7: showState / 101325,
    unit8: showState / 133.322,
    unit9: showState / 133.322,
    unit10: showState / 6894.76,
  });

  useEffect(() => {
    setValues({
      unit1: showState,
      unit2: showState / 100,
      unit3: showState / 100000,
      unit4: showState / 1000000,
      unit5: showState / 9.80665,
      unit6: showState / 98066.5,
      unit7: showState / 101325,
      unit8: showState / 133.322,
      unit9: showState / 133.322,
      unit10: showState / 6894.76,
    });
  }, [showState]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <PressureUnitCard value={values} />
    </div>
  );
};

export default PressureUnitDash;
