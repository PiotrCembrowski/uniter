"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import VolumeUnitCard, { Values } from "./VolumeUnitCard";
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

const VolumeUnitDash = () => {
  const showMetricValue = useAppSelector((state) => state.volumeSlice.metric);
  const showImperialValue = useAppSelector(
    (state) => state.volumeSlice.imperial
  );
  const showKitchenValue = useAppSelector((state) => state.volumeSlice.kitchen);
  const showAmericanValue = useAppSelector(
    (state) => state.volumeSlice.american
  );
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const dispatch = useDispatch();

  const metricUnit = Big(showMetricValue.unit).toNumber();
  const imperialUnit = Big(showImperialValue.unit).toNumber();
  const kitchenUnit = Big(showKitchenValue.unit).toNumber();
  const americanUnit = Big(showAmericanValue.unit).toNumber();

  const [metricValue, setMetricValue] = useState<Values>();
  const [imperialValue, setImperialValue] = useState<Values>();
  const [kitchenValue, setKitchenValue] = useState<Values>();
  const [americanValue, setAmericanValue] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  useEffect(() => {
    setDigit(showDigit);

    setMetricValue({
      unit1: metricUnit / 0.001,
      unit2: metricUnit / 0.01,
      unit3: metricUnit / 0.1,
      unit4: metricUnit,
      unit5: metricUnit / 1000,
    });

    setImperialValue({
      unit1: imperialUnit / 0.0284130625,
      unit2: imperialUnit / 0.56826125,
      unit3: imperialUnit / 1.1365225,
      unit4: imperialUnit / 4.54609,
      unit5: imperialUnit / 36.36872,
    });

    setKitchenValue({
      unit1: kitchenUnit / 0.005,
      unit2: kitchenUnit / 0.015,
      unit3: kitchenUnit / 0.25,
      unit4: kitchenUnit / 0.284,
      unit5: kitchenUnit / 0.24,
      unit6: kitchenUnit / 0.2,
      unit7: kitchenUnit / 0.02,
    });

    setAmericanValue({
      unit1: americanUnit / 0.0295735,
      unit2: americanUnit / 0.473176,
      unit3: americanUnit / 0.55061,
      unit4: americanUnit / 0.946353,
      unit5: americanUnit / 1.10122,
      unit6: americanUnit / 3.78541,
      unit7: americanUnit / 4.40488,
      unit8: americanUnit / 35.2391,
      unit9: americanUnit / 158.987294928,
    });
  }, [metricUnit, imperialUnit, kitchenUnit, americanUnit, showDigit]);

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
        <VolumeUnitCard
          title="Metric System"
          value={metricValue}
          digit={digit}
        />
        <VolumeUnitCard
          title="Imperial System"
          value={imperialValue}
          digit={digit}
        />
        <VolumeUnitCard
          title="Kitchen System"
          value={kitchenValue}
          digit={digit}
        />
        <VolumeUnitCard
          title="American System"
          value={americanValue}
          digit={digit}
        />
      </div>
    </>
  );
};

export default VolumeUnitDash;
