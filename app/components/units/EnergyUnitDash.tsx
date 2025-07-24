"use client";

import { useEffect, useState } from "react";
import EnergyUnitCard, { Values } from "./EnergyUnitCard";
import { useAppSelector } from "@/store/hooks";
import Big from "big.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { newDigitsState } from "@/store";

const EnegyUnitDash = () => {
  const showMetricState = useAppSelector((state) => state.energySlice.metric);
  const showImperialState = useAppSelector(
    (state) => state.energySlice.imperial
  );
  const showCaloriesState = useAppSelector(
    (state) => state.energySlice.calories
  );
  const showAtomicState = useAppSelector((state) => state.energySlice.atomic);
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const metricValue = Big(showMetricState.unit).toNumber();
  const imperialValue = Big(showImperialState.unit).toNumber();
  const caloriesValue = Big(showCaloriesState.unit).toNumber();
  const atomicValue = Big(showAtomicState.unit).toNumber();

  const [metricStateValues, setMetricStateValues] = useState<Values>();
  const [imeprialValues, setImperialValues] = useState<Values>();
  const [caloriesValues, setCaloriesValues] = useState<Values>();
  const [atomicValues, setAtomicValues] = useState<Values>();

  const dispatch = useDispatch();

  useEffect(() => {
    setMetricStateValues({
      unit1: energyMetricState,
      unit2: energyMetricState / 1000,
      unit3: energyMetricState / 9.80665,
      unit4: energyMetricState / 1000000,
      unit5: energyMetricState / 3600,
      unit6: energyMetricState / 3600000,
      unit7: energyMetricState / 1e-7,
    });

    setImperialValues({
      unit1: energyImperialState / 0.0421401,
      unit2: energyImperialState / 0.112985,
      unit3: energyImperialState / 1.35582,
      unit4: energyImperialState / 2684519.54,
      unit5: energyImperialState / 1055.06,
    });

    setCaloriesValues({
      unit1: energyCaloriesState / 4.184,
      unit2: energyCaloriesState / 4184,
    });
    setAtomicValues({
      unit1: energyAtomicState / 1.60218e-19,
      unit2: energyAtomicState / 1.60218e-16,
      unit3: energyAtomicState / 1.60218e-13,
      unit4: energyAtomicState / 1.49242e-10,
      unit5: energyAtomicState / 4.35974e-18,
      unit6: energyAtomicState / 2.17987e-18,
      unit7: energyAtomicState / 9.27401e-24,
      unit8: energyAtomicState / 5.05078e-27,
    });
  }, [
    energyMetricState,
    energyImperialState,
    energyCaloriesState,
    energyAtomicState,
  ]);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <EnergyUnitCard title="Metric System" values={metricStateValues} />
      <EnergyUnitCard title="Imperial System" values={imeprialValues} />
      <EnergyUnitCard title="Calories" values={caloriesValues} />
      <EnergyUnitCard title="Atomic" values={atomicValues} />
    </div>
  );
};

export default EnegyUnitDash;
