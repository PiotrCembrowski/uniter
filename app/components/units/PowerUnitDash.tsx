"use client";

import { useEffect, useState } from "react";
import PowerUnitCard, { Values } from "./PowerUnitCard";
import { useAppSelector } from "@/store/hooks";

const PowerUnitDash = () => {
  const showState = useAppSelector((state) => state.powerSlice.units);

  const [values, setValues] = useState<Values>({
    unit1: showState,
    unit2: showState / 1000,
    unit3: showState / 1000000,
    unit4: showState / 745.7,
    unit5: showState / 0.293071,
    unit6: showState / 17.5843,
    unit7: showState / 1055.06,
  });

  useEffect(() => {
    setValues({
      unit1: showState,
      unit2: showState / 1000,
      unit3: showState / 1000000,
      unit4: showState / 745.7,
      unit5: showState / 0.293071,
      unit6: showState / 17.5843,
      unit7: showState / 1055.06,
    });
  }, [showState]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <PowerUnitCard value={values} />
    </div>
  );
};

export default PowerUnitDash;
