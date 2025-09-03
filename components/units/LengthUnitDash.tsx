"use client";

import React, { useEffect } from "react";
import UnitCard, { ValuesMetric } from "./LengthUnitCard";
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

const LengthUnitDash = () => {
  const showMetricValue = useAppSelector(
    (state) => state.lengthUnitsSlice.metric
  );
  const showImperialValue = useAppSelector(
    (state) => state.lengthUnitsSlice.imperial
  );
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const unitMetric = Big(showMetricValue.unit).toNumber();
  const unitImperial = Big(showImperialValue.unit).toNumber();

  const dispatch = useDispatch();

  const [metricValue, setMetricValue] = useState<ValuesMetric>();
  const [imperialValue, setImperialValue] = useState<ValuesMetric>();
  const [digit, setDigit] = useState<number>(4);

  useEffect(() => {
    setDigit(showDigit);

    setImperialValue({
      unit1: unitImperial,
      unit2: unitImperial * 0.083,
      unit3: unitImperial * 0.0277778,
      unit4: unitImperial * 0.000568182,
      unit5: unitImperial * 0.000015783,
    });

    setMetricValue({
      unit1: unitMetric,
      unit2: unitMetric * 0.1,
      unit3: unitMetric * 0.01,
      unit4: unitMetric * 0.001,
      unit5: unitMetric * 0.000001,
    });
  }, [unitImperial, unitMetric, showDigit]);

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
        <UnitCard title="Metric System" value={metricValue} digit={digit} />
        <UnitCard title="Imperial System" value={imperialValue} digit={digit} />
      </div>
    </>
  );
};

export default LengthUnitDash;
