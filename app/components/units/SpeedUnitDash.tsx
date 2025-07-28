"use client";

import { useEffect, useState } from "react";
import SpeedUnitCard, { Values } from "./SpeedUnitCard";
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

const SpeedUnitDash = () => {
  const showState = useAppSelector((state) => state.speedSlice.unit);
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const unitValue = Big(showState.unit).toNumber();

  const [values, setValues] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  const dispatch = useDispatch();

  useEffect(() => {
    setDigit(showDigit);

    setValues({
      unit1: unitValue / 0.2777777778,
      unit2: unitValue / 0.4470311111,
      unit3: unitValue / 1000,
      unit4: unitValue / 1609.344,
      unit5: unitValue,
      unit6: unitValue / 0.3048,
      unit7: unitValue / 0.5144444444,
      unit8: unitValue / 340.3,
      unit9: unitValue / 299792458,
    });
  }, [unitValue, showDigit]);

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
        <SpeedUnitCard value={values} digit={digit} />
      </div>
    </>
  );
};

export default SpeedUnitDash;
