"use client";

import { useEffect, useState } from "react";
import {
  newAtomicEnergyState,
  newCaloriesEnergyState,
  newImperialEnergyState,
  newMetricEnergyState,
} from "@/store";
import { useDispatch } from "react-redux";
import Big from "big.js";

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
  value?: Values;
  digit?: number;
}

export default function EnergyUnitCard({ title, value, digit }: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();
  const [unit8Name, setUnit8Name] = useState<string>();

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

  let baseValue: Big;
  let metricValue: Big;
  let imperialValue: Big;
  let caloriesValue: Big;
  let atomicValue: Big;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const rawValue = event.target.value;
    const inputValue = new Big(
      rawValue === "" || isNaN(Number(rawValue)) ? "0" : rawValue
    );
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
          baseValue = inputValue.div(new Big("1000"));
          imperialValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.div(new Big("9.80665"));
          imperialValue = baseValue;
          atomicValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.div(new Big("1000000"));
          imperialValue = baseValue;
          atomicValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.div(new Big("3600"));
          imperialValue = baseValue;
          atomicValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.div(new Big("3600000"));
          imperialValue = baseValue;
          atomicValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue.div(new Big("1e-7"));
          imperialValue = baseValue;
          atomicValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue.div(new Big("5.05078e-27"));
          imperialValue = baseValue;
          atomicValue = baseValue;
          caloriesValue = baseValue;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newMetricEnergyState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newImperialEnergyState({
          unit: Big(imperialValue).toString(),
        })
      );

      dispatch(
        newCaloriesEnergyState({
          unit: Big(caloriesValue).toString(),
        })
      );

      dispatch(
        newAtomicEnergyState({
          unit: Big(atomicValue).toString(),
        })
      );
    }

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("0.0421401"));
          metricValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("0.112985"));
          metricValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("1.35582"));
          metricValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("2684519.54"));
          metricValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("1055.06"));
          metricValue = baseValue;
          caloriesValue = baseValue;
          atomicValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newImperialEnergyState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newMetricEnergyState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newCaloriesEnergyState({
          unit: Big(caloriesValue).toString(),
        })
      );

      dispatch(
        newAtomicEnergyState({
          unit: Big(atomicValue).toString(),
        })
      );
    }

    if (title === "Calories" && inputTitle === "Calories") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          metricValue = baseValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("1000"));
          metricValue = baseValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("4184"));
          metricValue = baseValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("4184000"));
          metricValue = baseValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newCaloriesEnergyState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newMetricEnergyState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newImperialEnergyState({
          unit: Big(imperialValue).toString(),
        })
      );

      dispatch(
        newAtomicEnergyState({
          unit: Big(atomicValue).toString(),
        })
      );
    }

    if (title === "Atomic" && inputTitle === "Atomic") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("1.60218e-19"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("1.60218e-16"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("1.60218e-13"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("1.66054e-27"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("4.35974e-18"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.times(new Big("2.17987e-18"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue.times(new Big("9.27401e-24"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue.times(new Big("5.05078e-27"));
          metricValue = baseValue;
          imperialValue = baseValue;
          caloriesValue = baseValue;
          break;

        default:
          baseValue = inputValue;
      }

      dispatch(
        newAtomicEnergyState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newMetricEnergyState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newImperialEnergyState({
          unit: Big(imperialValue).toString(),
        })
      );

      dispatch(
        newCaloriesEnergyState({
          unit: Big(caloriesValue).toString(),
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
