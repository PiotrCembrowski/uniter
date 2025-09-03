"use client";

import { useEffect, useState } from "react";
import PressureUnitCard, { Values } from "./PressureUnitCard";
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

const PressureUnitDash = () => {
  const showState = useAppSelector((state) => state.pressureSlice.unit);
  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const unit = Big(showState.unit).toNumber();

  const dispatch = useDispatch();

  const [values, setValues] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  useEffect(() => {
    setDigit(showDigit);

    setValues({
      unit1: unit,
      unit2: unit / 100,
      unit3: unit / 100000,
      unit4: unit / 1000000,
      unit5: unit / 9.80665,
      unit6: unit / 98066.5,
      unit7: unit / 101325,
      unit8: unit / 133.322,
      unit9: unit / 133.322,
      unit10: unit / 6894.76,
    });
  }, [unit, showDigit]);

  const digitHandler = (value: string) => {
    console.log("Selected digit:", value, digit);
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
        <PressureUnitCard value={values} digit={digit} />
      </div>
    </>
  );
};

export default PressureUnitDash;
