"use client";

import { useEffect, useState } from "react";
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
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();

  useEffect(() => {
    if (title === "Imperial System") {
      setUnit1Name("Inch [in]");
      setUnit2Name("Foot [ft]");
      setUnit3Name("Yard [yd]");
      setUnit4Name("Mile [mi]");
      setUnit5Name("league [lea]");
    }
    if (title === "Metric System") {
      setUnit1Name("Millimeter [mm]");
      setUnit2Name("Centimeter [cm]");
      setUnit3Name("Decimeter [dm]");
      setUnit4Name("Meter [m]");
      setUnit5Name("Kilometer [km]");
    }
  }, [title]);

  console.log(value);

  let baseValue: number;
  const dispatch = useDispatch();

  const Multiplier = (unit: number) => {
    dispatch(newState(unit));
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
          <label>{unit1Name}</label>
          <br />
          <input
            name={title}
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit1}
          />
        </div>
        <div>
          <label htmlFor="">{unit2Name}</label>
          <br />
          <input
            name={title}
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit2}
          />
        </div>
        <div>
          <label htmlFor="">{unit3Name}</label>
          <br />
          <input
            name={title}
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit3}
          />
        </div>
        <div>
          <label htmlFor="">{unit4Name}</label>
          <br />
          <input
            name={title}
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit4}
          />
        </div>
        <div>
          <label htmlFor="">{unit5Name}</label>
          <br />
          <input
            name={title}
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
