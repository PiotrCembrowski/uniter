"use client";

import React, { useEffect } from "react";
import UnitCard, { Values } from "./MassUnitCard";
import { useState } from "react";
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

const MassUnitDash = () => {
  const showMetricValue = useAppSelector((state) => state.massSlice.metric);
  const showImperialValue = useAppSelector((state) => state.massSlice.imperial);
  const showAtomicValue = useAppSelector((state) => state.massSlice.atomic);
  const showOtherValue = useAppSelector((state) => state.massSlice.other);
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const unitMetric = Big(showMetricValue.unit).toNumber();
  const unitImperial = Big(showImperialValue.unit).toNumber();
  const unitAtomic = Big(showAtomicValue.unit).toNumber();
  const unitOther = Big(showOtherValue.unit).toNumber();

  const dispatch = useDispatch();

  console.log(
    showImperialValue,
    showMetricValue,
    showAtomicValue,
    showOtherValue,
    showDigit
  );

  const [metricValue, setMetricValue] = useState<Values>();
  const [imperialValue, setImperialValue] = useState<Values>();
  const [atomicValue, setAtomicValue] = useState<Values>();
  const [otherValue, setOtherValue] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  useEffect(() => {
    setDigit(showDigit);

    setMetricValue({
      unit1: unitMetric / 0.000001,
      unit2: unitMetric / 0.001,
      unit3: unitMetric / 0.1,
      unit4: unitMetric / 1,
      unit5: unitMetric / 1000,
    });

    setImperialValue({
      unit1: unitImperial / 0.028349523,
      unit2: unitImperial / 0.45359237,
      unit3: unitImperial / 6.35029318,
      unit4: unitImperial / 45.359237,
      unit5: unitImperial / 50.80234544,
      unit6: unitImperial / 907.18474,
      unit7: unitImperial / 1016.0469088,
      unit8: unitImperial / 0.00006479891,
    });

    setAtomicValue({
      unit1: unitAtomic / 1.6605390666e-27,
      unit2: unitAtomic / 1.78266192e-30,
      unit3: unitAtomic / 2.176434e-8,
    });

    setOtherValue({
      unit1: unitOther / 0.0002,
      unit2: unitOther / 100,
    });
  }, [unitMetric, unitImperial, unitAtomic, unitOther, showDigit]);

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
      <h3 className="text-white flex">
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
        <UnitCard title="Metric System" value={metricValue} digit={digit} />
        <UnitCard title="Imperial System" value={imperialValue} digit={digit} />
        <UnitCard title="Atomic System" value={atomicValue} digit={digit} />
        <UnitCard title="Other" value={otherValue} digit={digit} />
      </div>
    </>
  );
};

export default MassUnitDash;
