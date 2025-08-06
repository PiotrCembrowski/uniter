"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import SurfaceUnitCard, { Values } from "./SurfaceUnitCard";
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

const SurfaceUnitDash = () => {
  const metricState = useAppSelector((state) => state.surfaceSlice.metric.unit);
  const imperialState = useAppSelector(
    (state) => state.surfaceSlice.imperial.unit
  );
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const metricValue = Big(metricState).toNumber();
  const imperialValue = Big(imperialState).toNumber();

  const dispatch = useDispatch();

  const [metricStateValues, setMetricStateValues] = useState<Values>();
  const [imperialValues, setImperialValues] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  useEffect(() => {
    setDigit(showDigit);

    setMetricStateValues({
      unit1: metricValue / 0.000001,
      unit2: metricValue / 0.0001,
      unit3: metricValue / 0.01,
      unit4: metricValue,
      unit5: metricValue / 1000000,
      unit6: metricValue / 100,
      unit7: metricValue / 10000,
    });

    setImperialValues({
      unit1: imperialValue / 0.00064516,
      unit2: imperialValue / 0.09290304,
      unit3: imperialValue / 0.83612736,
      unit4: imperialValue / 2589988.110336,
      unit5: imperialValue / 4046.8564224,
      unit6: imperialValue / 4046.87261,
    });
  }, [metricValue, imperialValue, showDigit]);

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
        <SurfaceUnitCard
          title="Metric System"
          value={metricStateValues}
          digit={digit}
        />
        <SurfaceUnitCard
          title="Imperial System"
          value={imperialValues}
          digit={digit}
        />
      </div>
    </>
  );
};

export default SurfaceUnitDash;
