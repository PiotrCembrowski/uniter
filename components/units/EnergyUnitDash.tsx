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
  const [digit, setDigit] = useState<number>(4);

  const dispatch = useDispatch();

  useEffect(() => {
    setDigit(showDigit);

    setMetricStateValues({
      unit1: metricValue,
      unit2: metricValue / 1000,
      unit3: metricValue / 9.80665,
      unit4: metricValue / 1000000,
      unit5: metricValue / 3600,
      unit6: metricValue / 3600000,
      unit7: metricValue / 1e-7,
    });

    setImperialValues({
      unit1: imperialValue / 0.0421401,
      unit2: imperialValue / 0.112985,
      unit3: imperialValue / 1.35582,
      unit4: imperialValue / 2684519.54,
      unit5: imperialValue / 1055.06,
    });

    setCaloriesValues({
      unit1: caloriesValue / 4.184,
      unit2: caloriesValue / 4184,
    });
    setAtomicValues({
      unit1: atomicValue / 1.60218e-19,
      unit2: atomicValue / 1.60218e-16,
      unit3: atomicValue / 1.60218e-13,
      unit4: atomicValue / 1.49242e-10,
      unit5: atomicValue / 4.35974e-18,
      unit6: atomicValue / 2.17987e-18,
      unit7: atomicValue / 9.27401e-24,
      unit8: atomicValue / 5.05078e-27,
    });
  }, [metricValue, imperialValue, caloriesValue, atomicValue, showDigit]);

  const digitHandler = (value: string) => {
    console.log("Selected digit:", value, digit);
    if (value === "infinite") {
      setDigit(100);
      dispatch(newDigitsState(100));
      return;
    }
    setDigit(Number(value));
    dispatch(newDigitsState(Number(value)));
  };

  return (
    <>
      <h3 className="text-white flex mb-5">
        Round up to the
        <Select onValueChange={digitHandler}>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder="4" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.from({ length: 15 }, (_, i) => (
                <SelectItem key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </SelectItem>
              ))}
              <SelectItem value="infinite">infinite</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
        digits after the decimal.
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <EnergyUnitCard
          title="Metric System"
          value={metricStateValues}
          digit={digit}
        />
        <EnergyUnitCard
          title="Imperial System"
          value={imeprialValues}
          digit={digit}
        />
        <EnergyUnitCard title="Calories" value={caloriesValues} digit={digit} />
        <EnergyUnitCard title="Atomic" value={atomicValues} digit={digit} />
      </div>
    </>
  );
};

export default EnegyUnitDash;
