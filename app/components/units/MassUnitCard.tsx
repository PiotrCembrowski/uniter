"use client";

import { useEffect, useState } from "react";
import {
  newAtomicMassState,
  newImperialMassState,
  newMetricMassState,
  newOtherMassState,
} from "@/store";
import { useDispatch } from "react-redux";

export type Values = {
  unit1: number;
  unit2: number;
  unit3?: number;
  unit4?: number;
  unit5?: number;
  unit6?: number;
  unit7?: number;
  unit8?: number;
  unit9?: number;
  unit10?: number;
};

interface UnitCardProps {
  title: string;
  value?: Values;
}

export default function MetricUnitCard({ title, value }: UnitCardProps) {
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
      setUnit1Name("milligram [mg]");
      setUnit2Name("gram [g]");
      setUnit3Name("decagram [dag]");
      setUnit4Name("kilogram [kg]");
      setUnit5Name("tonne [t]");
    }
    if (title === "Imperial System") {
      setUnit1Name("ounce [oz]");
      setUnit2Name("pound [lb]");
      setUnit3Name("stone [st]");
      setUnit4Name("hundredweight [cwt]");
      setUnit5Name("hundredweight uk [cwt]");
      setUnit6Name("short ton [ST]");
      setUnit7Name("long ton [LT]");
      setUnit8Name("mgrain [gr]");
    }
    if (title === "Atomic System") {
      setUnit1Name("atomic mass unit [amu]");
      setUnit2Name("MeV/c²");
      setUnit3Name("planck mass [mP]");
    }
    if (title === "Other") {
      setUnit1Name("karat [ct]");
      setUnit2Name("kwintal [Q]");
    }
  }, [title]);

  let baseValue: number;
  let imperialValue: number;
  let metricValue: number;
  let atomicValue: number;
  let otherValue: number;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const inputTitle = event.target.dataset.title;

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 0.0283495;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 0.453592;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 6.35029318;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 45.359237;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 50.80234544;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 907.18474;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 1016.0469088;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue * 0.00006479891;
          metricValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newImperialMassState(baseValue));
      dispatch(newMetricMassState(metricValue));
      dispatch(newAtomicMassState(atomicValue));
      dispatch(newOtherMassState(otherValue));
    }

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue * 1.6605390666e-27;
          otherValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue * 1.78266192e-30;
          otherValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue * 2.176434e-8;
          otherValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue;
          imperialValue = baseValue;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }
      dispatch(newImperialMassState(imperialValue));
      dispatch(newMetricMassState(baseValue));
      dispatch(newAtomicMassState(atomicValue));
      dispatch(newOtherMassState(otherValue));
    }

    if (title === "Atomic System" && inputTitle === "Atomic System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 10;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 100;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 1000;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          otherValue = baseValue;
          metricValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          atomicValue = baseValue;
          otherValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }
      dispatch(newImperialMassState(imperialValue));
      dispatch(newMetricMassState(metricValue));
      dispatch(newAtomicMassState(baseValue));
      dispatch(newOtherMassState(otherValue));
    }

    if (title === "Other" && inputTitle === "Other") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 10;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 100;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 1000;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        case "unit8":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          metricValue = baseValue;
          atomicValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }
      dispatch(newImperialMassState(imperialValue));
      dispatch(newMetricMassState(metricValue));
      dispatch(newAtomicMassState(atomicValue));
      dispatch(newOtherMassState(baseValue));
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#46A66F] bg-[#4F3E8C]  text-[#afa0e2]">
      <div className="aspect-[4/3] md:aspect-auto p-3">
        <div className="mb-8">
          <h3 className="font-medium"></h3>
        </div>
        <div>
          <label>{unit1Name}</label>
          <br />
          <input
            name="unit1"
            className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
            type="text"
            onChange={handleChange}
            value={value?.unit1}
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
            value={value?.unit2}
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
              value={value?.unit3}
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
              value={value?.unit4}
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
              value={value?.unit5}
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
              value={value?.unit6}
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
              value={value?.unit7}
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
              value={value?.unit8}
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
