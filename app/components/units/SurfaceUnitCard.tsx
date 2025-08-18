"use client";

import { newImperialSurfaceState, newMetricSurfaceState } from "@/store";
import { useEffect, useState } from "react";
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

export default function SurfaceUnitCard({
  title,
  value,
  digit,
}: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();

  useEffect(() => {
    if (title === "Metric System") {
      setUnit1Name("milimeter2 [mm2]");
      setUnit2Name("centimeter2 [cm2]");
      setUnit3Name("decimiter2 [dm2]");
      setUnit4Name("meter2 [m2]");
      setUnit5Name("kilometr2 [km2]");
      setUnit6Name("ar [ar]");
      setUnit7Name("hektar [ha]");
    }

    if (title === "Imperial System") {
      setUnit1Name("inch2 [in2]");
      setUnit2Name("foot2 [ft2]");
      setUnit3Name("yard2 [yd2]");
      setUnit4Name("mile2 [mi2]");
      setUnit5Name("imperial acre [UK]");
      setUnit6Name("american acre [US]");
    }
  }, [title]);

  let baseValue: Big;
  let metricValue: Big;
  let imperialValue: Big;
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
    const inputTitle = event.target.dataset.title;

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("0.000001"));
          imperialValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("0.0001"));
          imperialValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("0.01"));
          imperialValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue;
          imperialValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("1000000"));
          imperialValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.div(new Big("100"));
          imperialValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue.div(new Big("10000"));
          imperialValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newMetricSurfaceState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newImperialSurfaceState({
          unit: Big(imperialValue).toString(),
        })
      );
    }

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("0.00064516"));
          metricValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("0.09290304"));
          metricValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("0.83612736"));
          metricValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("2589988.110336"));
          metricValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("4046.8564224"));
          metricValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.times(new Big("4046.87261"));
          metricValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newMetricSurfaceState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newImperialSurfaceState({
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
            onKeyDown={handleOnKeyDown}
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
            onKeyDown={handleOnKeyDown}
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
              onKeyDown={handleOnKeyDown}
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
              onKeyDown={handleOnKeyDown}
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
              onKeyDown={handleOnKeyDown}
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
              onKeyDown={handleOnKeyDown}
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
              onKeyDown={handleOnKeyDown}
              onChange={handleChange}
              value={
                value?.unit7 ? Big(value.unit7).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
