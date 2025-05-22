"use client";

import { newPowerState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export type Values = {
  unit1: number;
  unit2: number;
  unit3: number;
  unit4: number;
  unit5: number;
  unit6: number;
  unit7: number;
};

interface UnitCardProps {
  value?: Values;
}

export default function PowerUnitCard({ value }: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();
  const [values, setValues] = useState<Values>({
    unit1: 0,
    unit2: 0,
    unit3: 0,
    unit4: 0,
    unit5: 0,
    unit6: 0,
    unit7: 0,
  });

  useEffect(() => {
    setUnit1Name("watt [W]");
    setUnit2Name("kilowatt [kW]");
    setUnit3Name("megawatt [MW]");
    setUnit4Name("horsepower [hp]");
    setUnit5Name("BTU/h");
    setUnit6Name("BTU/min");
    setUnit7Name("BTU/s");
  }, []);

  let baseValue: number;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    console.log(inputValue);

    switch (inputName) {
      case "unit1":
        baseValue = inputValue;
        break;
      case "unit2":
        baseValue = inputValue / 1000;
        break;
      case "unit3":
        baseValue = inputValue / 1000000;
        break;
      case "unit4":
        baseValue = inputValue / 745.7;
        break;
      case "unit5":
        baseValue = inputValue / 0.293071;
        break;
      case "unit6":
        baseValue = inputValue / 17.5843;
        break;
      case "unit7":
        baseValue = inputValue / 1055.06;
        break;
      default:
        baseValue = inputValue;
    }

    dispatch(newPowerState(baseValue));
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] p-3 flex flex-col justify-between space-y-2">
        <div className="mb-8">
          <h3 className="font-medium text-gray-900"></h3>
        </div>
        <div className="w-full">
          <label>{unit1Name}</label>
          <br />
          <input
            name="unit1"
            className="border-2 w-full"
            type="text"
            onChange={handleChange}
            value={value?.unit1}
          />
        </div>
        <div>
          <label htmlFor="">{unit2Name}</label>
          <br />
          <input
            name="unit2"
            className="border-2 w-full"
            type="text"
            onChange={handleChange}
            value={value?.unit2}
          />
        </div>
        <div>
          <label htmlFor="">{unit3Name}</label>
          <br />
          <input
            name="unit3"
            className="border-2 w-full"
            type="text"
            onChange={handleChange}
            value={value?.unit3}
          />
        </div>
        <div>
          <label htmlFor="">{unit4Name}</label>
          <br />
          <input
            name="unit4"
            className="border-2 w-full"
            type="text"
            onChange={handleChange}
            value={value?.unit4}
          />
        </div>
        <div>
          <label htmlFor="">{unit5Name}</label>
          <br />
          <input
            name="unit5"
            className="border-2 w-full"
            type="text"
            onChange={handleChange}
            value={value?.unit5}
          />
        </div>
        <div>
          <label htmlFor="">{unit6Name}</label>
          <br />
          <input
            name="unit6"
            className="border-2 w-full"
            type="text"
            onChange={handleChange}
            value={value?.unit6}
          />
        </div>
        <div>
          <label htmlFor="">{unit7Name}</label>
          <br />
          <input
            name="unit7"
            className="border-2 w-full"
            type="text"
            onChange={handleChange}
            value={value?.unit7}
          />
        </div>
      </div>
    </div>
  );
}
