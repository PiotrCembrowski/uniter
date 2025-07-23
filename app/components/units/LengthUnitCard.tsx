"use client";

import { useEffect, useState } from "react";
import { newLengthImperialState, newLengthMetricState } from "@/store";
import { useDispatch } from "react-redux";
import Big from "big.js";

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
  digit?: number;
}

export default function MetricUnitCard({ title, value, digit }: UnitCardProps) {
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

  let baseValue: Big;
  let imperialValue: Big;
  let metricValue: Big;
  let seaValue: Big;
  let astronomicValue: Big;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputTitle = event.target.dataset.title;
    const rawValue = event.target.value;
    const inputValue = new Big(
      rawValue === "" || isNaN(Number(rawValue)) ? "0" : rawValue
    );

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          metricValue = baseValue.times(new Big(25.4));
          break;
        case "unit2":
          baseValue = inputValue.times(new Big(12));
          metricValue = baseValue.times(new Big(25.4));
          break;
        case "unit3":
          baseValue = inputValue.times(new Big(36));
          metricValue = baseValue.times(new Big(25.4));
          break;
        case "unit4":
          baseValue = inputValue.times(new Big(63360));
          metricValue = baseValue.times(new Big(25.4));
          break;
        case "unit5":
          baseValue = inputValue.times(new Big(190000));
          metricValue = baseValue.times(new Big(25.4));
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newLengthMetricState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newLengthImperialState({
          unit: Big(baseValue).toString(),
        })
      );
    }

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          imperialValue = baseValue.div(new Big(25.4));
          break;
        case "unit2":
          baseValue = inputValue.times(new Big(10));
          imperialValue = baseValue.div(new Big(25.4));
          break;
        case "unit3":
          baseValue = inputValue.times(new Big(100));
          imperialValue = baseValue.div(new Big(25.4));
          break;
        case "unit4":
          baseValue = inputValue.times(new Big(1000));
          imperialValue = baseValue.div(new Big(25.4));
          break;
        case "unit5":
          baseValue = inputValue.times(new Big(1000000));
          imperialValue = baseValue.div(new Big(25.4));
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newLengthMetricState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newLengthImperialState({
          unit: Big(imperialValue).toString(),
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
            type="number"
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
              type="number"
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
              type="number"
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
              type="number"
              onChange={handleChange}
              value={
                value?.unit5 ? Big(value.unit5).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
