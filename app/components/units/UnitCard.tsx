"use client";

import { useState } from "react";
import { newState } from "@/store";
import { useDispatch } from "react-redux";

export type ValuesMetric = {
  unit1: number;
  unit2: number;
  unit3: number;
  unit4: number;
  unit5: number;
};

interface UnitCardProps {
  title: string;
  value?: ValuesMetric;
}

export default function UnitCard({ title, value }: UnitCardProps) {
  console.log(value);

  let baseValue: number;
  const dispatch = useDispatch();

  const Multiplier = (unit: number) => {
    dispatch(newState(baseValue));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    console.log(inputName);

    if (title === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          break;
        case "unit2":
          baseValue = inputValue * 12;
          break;
        case "unit3":
          baseValue = inputValue * 36;
          break;
        case "unit4":
          baseValue = inputValue * 63360;
          break;
        case "unit5":
          baseValue = inputValue * 190000;
          break;
        default:
          baseValue = inputValue;
      }
      Multiplier(baseValue);
    }

    if (title === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          break;
        case "unit2":
          baseValue = inputValue * 10;
          break;
        case "unit3":
          baseValue = inputValue * 100;
          break;
        case "unit4":
          baseValue = inputValue * 1000;
          break;
        case "unit5":
          baseValue = inputValue * 1000000;
          break;
        default:
          baseValue = inputValue;
      }
      Multiplier(baseValue);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] p-3">
        <div className="mb-8">
          <h3 className="font-medium text-gray-900"></h3>
        </div>
        <div>
          <label>millimeter [mm]</label>
          <br />
          <input
            name="unit1"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit1}
          />
        </div>
        <div>
          <label htmlFor="">centimeter [cm]</label>
          <br />
          <input
            name="unit2"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit2}
          />
        </div>
        <div>
          <label htmlFor="">decimeter [dm]</label>
          <br />
          <input
            name="unit3"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit3}
          />
        </div>
        <div>
          <label htmlFor="">meter [m]</label>
          <br />
          <input
            name="unit4"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit4}
          />
        </div>
        <div>
          <label htmlFor="">kilometer [km]</label>
          <br />
          <input
            name="unit5"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit5}
          />
        </div>
      </div>
    </div>
  );
}
