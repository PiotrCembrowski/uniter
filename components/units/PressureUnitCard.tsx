"use client";

import { newPressureState } from "@/store";
import { useEffect, useState } from "react";
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
  unit9: number;
  unit10: number;
};

interface UnitCardProps {
  value?: Values;
  digit?: number;
}

export default function PressureUnitCard({ value, digit }: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();
  const [unit8Name, setUnit8Name] = useState<string>();
  const [unit9Name, setUnit9Name] = useState<string>();
  const [unit10Name, setUnit10Name] = useState<string>();

  useEffect(() => {
    setUnit1Name("Pascal [1 Pa=N/m2]");
    setUnit2Name("Hektopascal [hPa]");
    setUnit3Name("Bar [bar]");
    setUnit4Name("Newton/milimetr2 [1 N/mm2]");
    setUnit5Name("Kilogram/metr2 [1 KG/m2]");
    setUnit6Name("Technical atmosphere [at]");
    setUnit7Name("Standard atmosphere [atm]");
    setUnit8Name("Tor [Tr]");
    setUnit9Name("Millimeter of mercury [mmHg]");
    setUnit10Name("Psi [lbf/in2]");
  }, []);

  let baseValue: Big;
  const dispatch = useDispatch();

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ".") {
      event.preventDefault();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const rawValue = event.target.value;
    const inputValue = new Big(
      rawValue === "" || isNaN(Number(rawValue)) ? "0" : rawValue
    );

    switch (inputName) {
      case "unit1":
        baseValue = inputValue;
        break;
      case "unit2":
        baseValue = inputValue.times(new Big("100"));
        break;
      case "unit3":
        baseValue = inputValue.times(new Big("100000"));
        break;
      case "unit4":
        baseValue = inputValue.times(new Big("1000000"));
        break;
      case "unit5":
        baseValue = inputValue.times(new Big("9.80665"));
        break;
      case "unit6":
        baseValue = inputValue.times(new Big("98066.5"));
        break;
      case "unit7":
        baseValue = inputValue.times(new Big("101325"));
        break;
      case "unit8":
        baseValue = inputValue.times(new Big("133.322"));
        break;
      case "unit9":
        baseValue = inputValue.times(new Big("133.322"));
        break;
      case "unit10":
        baseValue = inputValue.times(new Big("6894.76"));
        break;
      default:
        baseValue = inputValue;
    }

    dispatch(
      newPressureState({
        unit: Big(baseValue).toString(),
      })
    );
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#46A66F] bg-[#4F3E8C]  text-[#afa0e2]">
      <div className="aspect-[4/3] md:aspect-auto p-3">
        <div className="mb-8"></div>
        <div>
          <label>{unit1Name}</label>
          <br />
          <input
            name="unit1"
            className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
            onKeyDown={handleOnKeyDown}
            onChange={handleChange}
            value={value?.unit1 ? Big(value.unit1).round(digit).toString() : ""}
          />
        </div>
        <div>
          <label htmlFor="">{unit2Name}</label>
          <br />
          <input
            name="unit2"
            className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
            onKeyDown={handleOnKeyDown}
            onChange={handleChange}
            value={value?.unit2 ? Big(value.unit2).round(digit).toString() : ""}
          />
        </div>
        {unit3Name && (
          <div>
            <label htmlFor="">{unit3Name}</label>
            <br />
            <input
              name="unit3"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit3 ? Big(value.unit3).round(digit).toString() : ""
              }
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
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit4 ? Big(value.unit4).round(digit).toString() : ""
              }
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
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit5 ? Big(value.unit5).round(digit).toString() : ""
              }
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
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit6 ? Big(value.unit6).round(digit).toString() : ""
              }
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
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit7 ? Big(value.unit7).round(digit).toString() : ""
              }
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
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit8 ? Big(value.unit8).round(digit).toString() : ""
              }
            />
          </div>
        )}
        {unit9Name && (
          <div>
            <label htmlFor="">{unit9Name}</label>
            <br />
            <input
              name="unit9"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit9 ? Big(value.unit9).round(digit).toString() : ""
              }
            />
          </div>
        )}
        {unit10Name && (
          <div>
            <label htmlFor="">{unit10Name}</label>
            <br />
            <input
              name="unit10"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit10 ? Big(value.unit10).round(digit).toString() : ""
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
