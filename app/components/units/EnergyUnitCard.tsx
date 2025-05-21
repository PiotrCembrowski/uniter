"use client";

import { useEffect, useState } from "react";
import { newDayState, newOverDayState } from "@/store";
import { useDispatch } from "react-redux";

export type Values = {
  unit1?: number;
  unit2?: number;
  unit3?: number;
  unit4?: number;
  unit5?: number;
  unit6?: number;
  unit7?: number;
  unit8?: number;
};

interface UnitCardProps {
  title: string;
  values?: Values;
}

export default function EnergyUnitCard({ title, values }: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();
  const [unit8Name, setUnit8Name] = useState<string>();

  console.log("EnergyUnitCard", title);
  console.log("EnergyUnitCard", values);

  useEffect(() => {
    if (title === "Metric System") {
      setUnit1Name("Joule [J]");
      setUnit2Name("Kilojoule [kJ]");
      setUnit3Name("kilogram-meter [kgm]");
      setUnit4Name("megajoule [MJ]");
      setUnit5Name("watt-hour [Wh]");
      setUnit6Name("kilowatt-hour [kWh]");
      setUnit7Name("Erg [erg]");
    }
    if (title === "Imperial System") {
      setUnit1Name("foot-poundal [ft pdl]");
      setUnit2Name("inch-pound force [in lbf]");
      setUnit3Name("foot-pound force [ft lbf]");
      setUnit4Name("horsepower-hour [hph]");
      setUnit5Name("British thermal unit [BTU]");
    }
    if (title === "Calories") {
      setUnit1Name("calorie [cal]");
      setUnit2Name("kilocalorie [kcal]");
      setUnit3Name("thermochemical calorie [th cal]");
      setUnit4Name("large calorie [Cal]");
    }
    if (title === "Atomic") {
      setUnit1Name("electron volt [eV]");
      setUnit2Name("kiloelectron volt [keV]");
      setUnit3Name("megaelectron volt [MeV]");
      setUnit4Name("atomic mass unit [amu]");
      setUnit5Name("Hartree [Eh]");
      setUnit6Name("Rydberg [Ry]");
      setUnit7Name("Bohr magneton [μB]");
      setUnit8Name("Nuclear magneton [μN]");
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
        {unit4Name && (
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
        )}
        {unit5Name && (
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
        )}
        {unit6Name && (
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
        )}
        {unit7Name && (
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
        )}
        {unit8Name && (
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
        )}
      </div>
    </div>
  );
}
