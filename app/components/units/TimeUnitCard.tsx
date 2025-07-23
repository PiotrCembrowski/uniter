"use client";

import { useEffect, useState } from "react";
import { newDayState, newOverDayState } from "@/store";
import { useDispatch } from "react-redux";
import Big from "big.js";

export type Values = {
  unit1: number;
  unit2: number;
  unit3: number;
  unit4: number;
  unit5: number;
  unit6: number;
  unit7: number;
  unit8: number;
};

interface UnitCardProps {
  title: string;
  value?: Values;
  digit?: number;
}

export default function TimeUnitCard({ title, value, digit }: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();
  const [unit8Name, setUnit8Name] = useState<string>();

  useEffect(() => {
    if (title === "day") {
      setUnit1Name("picosecond [ps]");
      setUnit2Name("nanosecond [ns]");
      setUnit3Name("microsecond [μs]");
      setUnit4Name("millisecond [ms]");
      setUnit5Name("second [s]");
      setUnit6Name("minute [min]");
      setUnit7Name("hour [h]");
      setUnit8Name("day [d]");
    }
    if (title === "More than a day") {
      setUnit1Name("week [wk]");
      setUnit2Name("month [mo]");
      setUnit3Name("year [yr]");
      setUnit4Name("leap year [ly]");
      setUnit5Name("average year [a]");
      setUnit6Name("decade [dec]");
      setUnit7Name("century [cent]");
      setUnit8Name("millennium [kyr]");
    }
  }, [title]);

  let baseValue: Big;
  let dayValue: Big;
  let overDayValue: Big;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const rawValue = event.target.value;
    const inputValue = new Big(
      rawValue === "" || isNaN(Number(rawValue)) ? "0" : rawValue
    );
    const inputTitle = event.target.dataset.title;

    if (title === "day" && inputTitle === "day") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("1e - 12"));
          overDayValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("1e - 9"));
          overDayValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("1e - 6"));
          overDayValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("1e - 3"));
          overDayValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue;
          overDayValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.times(new Big("60"));
          overDayValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue.times(new Big("3600"));
          overDayValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue.times(new Big("86400"));
          overDayValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newDayState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newOverDayState({
          unit: Big(overDayValue).toString(),
        })
      );
    }

    if (title === "More than a day" && inputTitle === "More than a day") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("604800"));
          dayValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("2592000"));
          dayValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("31536000"));
          dayValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("31622400"));
          dayValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("31557600"));
          dayValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.times(new Big("315576000"));
          dayValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue.times(new Big("3155760000"));
          dayValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue.times(new Big("31557600000"));
          dayValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newDayState({
          unit: Big(dayValue).toString(),
        })
      );

      dispatch(
        newOverDayState({
          unit: Big(baseValue).toString(),
        })
      );
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#46A66F] bg-[#4F3E8C]  text-[#afa0e2]">
      <div className="aspect-[4/3] md:aspect-auto p-3">
        <div className="mb-8">
          <h3 className="font-medium">{title}</h3>
        </div>
        <div>
          <label>{unit1Name}</label>
          <br />
          <input
            name="unit1"
            className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
            onChange={handleChange}
            value={value?.unit1 ? Big(value.unit1).round(digit).toString() : ""}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit2Name}</label>
          <br />
          <input
            name="unit2"
            className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
            onChange={handleChange}
            value={value?.unit2 ? Big(value.unit2).round(digit).toString() : ""}
            data-title={title}
          />
        </div>
        {unit3Name && (
          <div>
            <label htmlFor="">{unit3Name}</label>
            <br />
            <input
              name="unit3"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onChange={handleChange}
              value={
                value?.unit3 ? Big(value.unit3).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
        {unit4Name && (
          <div>
            <label htmlFor="">{unit4Name}</label>
            <br />
            <input
              name="unit4"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onChange={handleChange}
              value={
                value?.unit4 ? Big(value.unit4).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
        {unit5Name && (
          <div>
            <label htmlFor="">{unit5Name}</label>
            <br />
            <input
              name="unit5"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onChange={handleChange}
              value={
                value?.unit5 ? Big(value.unit5).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
        {unit6Name && (
          <div>
            <label htmlFor="">{unit6Name}</label>
            <br />
            <input
              name="unit6"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onChange={handleChange}
              value={
                value?.unit6 ? Big(value.unit6).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
        {unit7Name && (
          <div>
            <label htmlFor="">{unit7Name}</label>
            <br />
            <input
              name="unit7"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onChange={handleChange}
              value={
                value?.unit7 ? Big(value.unit7).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
        {unit8Name && (
          <div>
            <label htmlFor="">{unit8Name}</label>
            <br />
            <input
              name="unit8"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onChange={handleChange}
              value={
                value?.unit8 ? Big(value.unit8).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
