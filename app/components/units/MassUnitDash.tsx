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

const MassUnitDash = () => {
  const showMetricValue = useAppSelector((state) => state.massSlice.metric);
  const showImperialValue = useAppSelector((state) => state.massSlice.imperial);
  const showAtomicValue = useAppSelector((state) => state.massSlice.atomic);
  const showOtherValue = useAppSelector((state) => state.massSlice.other);

  const unitMetric = Big(showMetricValue.unit).toNumber();
  const unitImperial = Big(showImperialValue.unit).toNumber();
  const unitAtomic = Big(showAtomicValue.unit).toNumber();
  const unitOther = Big(showOtherValue.unit).toNumber();

  console.log(
    showImperialValue,
    showMetricValue,
    showAtomicValue,
    showOtherValue
  );

  const [metricValue, setMetricValue] = useState<Values>();
  const [imperialValue, setImperialValue] = useState<Values>();
  const [atomicValue, setAtomicValue] = useState<Values>();
  const [otherValue, setOtherValue] = useState<Values>();

  useEffect(() => {
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
  }, [unitMetric, unitImperial, unitAtomic, unitOther]);

  return (
    <>
      <h3 className="text-white flex">
        Round up to the
        <Select>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder="4" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="9">9</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="11">11</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="13">13</SelectItem>
              <SelectItem value="14">14</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="infinite">infinite</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>{" "}
        digits after the decimal.
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <UnitCard title="Metric System" value={metricValue} />
        <UnitCard title="Imperial System" value={imperialValue} />
        <UnitCard title="Atomic System" value={atomicValue} />
        <UnitCard title="Other" value={otherValue} />
      </div>
    </>
  );
};

export default MassUnitDash;
