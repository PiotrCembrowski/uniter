"use client";

import { useEffect, useState } from "react";
import PowerUnitCard, { Values } from "./PowerUnitCard";
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

const PowerUnitDash = () => {
  const showState = useAppSelector((state) => state.powerSlice.units);
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const stateValue = Big(showState.units).toNumber();

  const [values, setValues] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  const dispatch = useDispatch();

  useEffect(() => {
    setDigit(showDigit);

    setValues({
      unit1: stateValue,
      unit2: stateValue / 1000,
      unit3: stateValue / 1000000,
      unit4: stateValue / 745.7,
      unit5: stateValue / 0.293071,
      unit6: stateValue / 17.5843,
      unit7: stateValue / 1055.06,
    });
  }, [stateValue, showDigit]);

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
        <PowerUnitCard value={values} digit={digit} />
      </div>
    </>
  );
};

export default PowerUnitDash;
