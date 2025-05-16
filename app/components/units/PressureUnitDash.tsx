"use client";

import { useEffect, useState } from "react";
import PressureUnitCard, { Values } from "./PressureUnitCard";
import { useAppSelector } from "@/store/hooks";

const PressureUnitDash = () => {
  const showState = useAppSelector((state) => state.);

  const [values, setValues] = useState<Values>({
    unit1: showState,
    unit2: showState * 0.01,
    unit3: showState * 0.00001,
    unit4: showState * 0.000145038,
    unit5: showState * 0.00000986923,
    unit6: showState * 0.00000986923,
    unit7: showState * 0.000145038,
    unit8: showState * 0.00000986923,
    unit9: showState * 0.00750062,
    unit10: showState * 0.0208854,
  });

  useEffect(() => {
    setValues({
      unit1: showState,
      unit2: showState * 0.01,
      unit3: showState * 0.00001,
      unit4: showState * 0.000145038,
      unit5: showState * 0.00000986923,
      unit6: showState * 0.00000986923,
      unit7: showState * 0.000145038,
      unit8: showState * 0.00000986923,
      unit9: showState * 0.00750062,
      unit10: showState * 0.0208854,
    });
  }, [showState]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <PressureUnitCard value={values} />
    </div>
  );
};

export default PressureUnitDash;
