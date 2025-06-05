"use client";

import { useEffect, useState } from "react";
import {
  newAtomicEnergyState,
  newCaloriesEnergyState,
  newImperialEnergyState,
  newMetricEnergyState,
} from "@/store";
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
  let metricValue: number;
  let imperialValue: number;
  let caloriesValue: number;
  let atomicValue: number;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const inputTitle = event.target.dataset.title;

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue / 1000;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue / 9.80665;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue / 1000000;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue / 3600;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue / 3600000;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue / 1e-7;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue / 5.05078e-27;
          imperialValue = baseValue;
          atomicValue = baseValue;
        default:
          baseValue = inputValue;
      }

      dispatch(newMetricEnergyState(baseValue));
      dispatch(newImperialEnergyState(imperialValue));
      dispatch(newCaloriesEnergyState(caloriesValue));
      dispatch(newAtomicEnergyState(atomicValue));
    }

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 0.0421401;
          metricValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 0.112985;
          metricValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 1.35582;
          metricValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 2684519.54;
          metricValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 1055.06;
          metricValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newImperialEnergyState(baseValue));
      dispatch(newMetricEnergyState(metricValue));
      dispatch(newCaloriesEnergyState(caloriesValue));
      dispatch(newAtomicEnergyState(atomicValue));
    }

    if (title === "Calories" && inputTitle === "Calories") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          metricValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 1000;
          metricValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 4184;
          metricValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 4184000;
          metricValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newCaloriesEnergyState(baseValue));
      dispatch(newMetricEnergyState(metricValue));
      dispatch(newImperialEnergyState(metricValue));
      dispatch(newAtomicEnergyState(atomicValue));
    }
    if (title === "Atomic" && inputTitle === "Atomic") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 1.60218e-19;
          metricValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 1.60218e-16;
          metricValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 1.60218e-13;
          metricValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 1.66054e-27;
          metricValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 4.35974e-18;
          metricValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 2.17987e-18;
          metricValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 9.27401e-24;
          metricValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue * 5.05078e-27;
          metricValue = baseValue;
          break;

        default:
          baseValue = inputValue;
      }

      dispatch(newAtomicEnergyState(baseValue));
      dispatch(newMetricEnergyState(metricValue));
      dispatch(newImperialEnergyState(metricValue));
      dispatch(newCaloriesEnergyState(metricValue));
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
            className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
            type="text"
            onChange={handleChange}
            value={values?.unit2}
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
              type="text"
              onChange={handleChange}
              value={values?.unit3}
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
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
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
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
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
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
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
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
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
