"use client";

import { useEffect, useState } from "react";
import TimeUnitCard, { Values } from "./TimeUnitCard";
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

const TimeUnitDash = () => {
  const timeState = useAppSelector((state) => state.timeSlice.day);
  const overTimeState = useAppSelector((state) => state.timeSlice.overDay);
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const dayValue = Big(timeState.unit).toNumber();
  const overDayValue = Big(overTimeState.unit).toNumber();

  const dispatch = useDispatch();

  const [dayValues, setDayValues] = useState<Values>();
  const [overDayValues, setOverDayValues] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  useEffect(() => {
    setDayValues({
      unit1: dayValue / 1e-12,
      unit2: dayValue / 1e-9,
      unit3: dayValue / 1e-6,
      unit4: dayValue / 0.001,
      unit5: dayValue,
      unit6: dayValue / 60,
      unit7: dayValue / 3600,
      unit8: dayValue / 86400,
    });

    setOverDayValues({
      unit1: overDayValue / 604800,
      unit2: overDayValue / 2592000,
      unit3: overDayValue / 31536000,
      unit4: overDayValue / 31622400,
      unit5: overDayValue / 31557600,
      unit6: overDayValue / 315576000,
      unit7: overDayValue / 3155760000,
      unit8: overDayValue / 31557600000,
    });
  }, [dayValue, overDayValue, showDigit]);

  const digitHandler = (value: string) => {
    console.log("Selected digit:", value, digit);
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
        <TimeUnitCard title="day" value={dayValues} digit={digit} />
        <TimeUnitCard
          title="More than a day"
          value={overDayValues}
          digit={digit}
        />
      </div>
    </>
  );
};

export default TimeUnitDash;
