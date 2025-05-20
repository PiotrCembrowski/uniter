"use client";

import { useEffect, useState } from "react";
import { newDayState, newOverDayState } from "@/store";
import { useDispatch } from "react-redux";

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
  values?: Values;
}

export default function TimeUnitCard({ title, values }: UnitCardProps) {
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

  let baseValue: number;
  let dayValue: number;
  let overDayValue: number;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const inputTitle = event.target.dataset.title;

    if (title === "day" && inputTitle === "day") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 1e-12;
          overDayValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 1e-9;
          overDayValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 1e-6;
          overDayValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 1e-3;
          overDayValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue;
          overDayValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 60;
          overDayValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 3600;
          overDayValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue * 86400;
          overDayValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newDayState(baseValue));
      dispatch(newOverDayState(overDayValue));
    }

    if (title === "More than a day" && inputTitle === "More than a day") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 604800;
          dayValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 2592000;
          dayValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 31536000;
          dayValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 31622400;
          dayValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 31557600;
          dayValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 315576000;
          dayValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 3155760000;
          dayValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue * 31557600000;
          dayValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }
      dispatch(newOverDayState(baseValue));
      dispatch(newDayState(dayValue));
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
            name="unit1"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit1}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit2Name}</label>
          <br />
          <input
            name="unit2"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit2}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit3Name}</label>
          <br />
          <input
            name="unit3"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit3}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit4Name}</label>
          <br />
          <input
            name="unit4"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit4}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit5Name}</label>
          <br />
          <input
            name="unit5"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit5}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit6Name}</label>
          <br />
          <input
            name="unit6"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit6}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit7Name}</label>
          <br />
          <input
            name="unit7"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit7}
            data-title={title}
          />
        </div>
        <div>
          <label htmlFor="">{unit8Name}</label>
          <br />
          <input
            name="unit8"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={values?.unit8}
            data-title={title}
          />
        </div>
      </div>
    </div>
  );
}
