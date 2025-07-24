"use client";

import { useEffect, useState } from "react";
import {
  newMetricVolumeState,
  newImperialVolumeState,
  newAmericanVolumeState,
  newKitchenVolumeState,
} from "@/store";
import { useDispatch } from "react-redux";
import Big from "big.js";

export type Values = {
  unit1: number;
  unit2: number;
  unit3: number;
  unit4: number;
  unit5: number;
  unit6?: number;
  unit7?: number;
  unit8?: number;
  unit9?: number;
};

interface UnitCardProps {
  title: string;
  value?: Values;
  digit?: number;
}

export default function VolumeUnitCard({ title, value, digit }: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();
  const [unit8Name, setUnit8Name] = useState<string>();
  const [unit9Name, setUnit9Name] = useState<string>();

  useEffect(() => {
    if (title === "Metric System") {
      setUnit1Name("mililitr [ml]");
      setUnit2Name("centylitr [cl]");
      setUnit3Name("decylitr [dl]");
      setUnit4Name("litr [l]");
      setUnit5Name("metr [m3]");
    }

    if (title === "Imperial System") {
      setUnit1Name("ounce [fl oz]");
      setUnit2Name("pint [pt]");
      setUnit3Name("quart [qt]");
      setUnit4Name("gallon [gal]");
      setUnit5Name("bushel [bu]");
    }

    if (title === "Kitchen System") {
      setUnit1Name("teaspoon (5ml)");
      setUnit2Name("table spoon (15ml)");
      setUnit3Name("glass [250ml]");
      setUnit4Name("cup (UK, Europe) [284ml]");
      setUnit5Name("cup (US) [240ml]");
      setUnit6Name("cup (JP) [200ml]");
      setUnit7Name("tablespoon (Australia) [20ml]");
    }

    if (title === "American System") {
      setUnit1Name("ounce US [fl oz US]");
      setUnit2Name("liquid pint [fl pt]");
      setUnit3Name("dry pint [dr pt]");
      setUnit4Name("liquid quart [fl qt]");
      setUnit5Name("dry quart [dr qt]");
      setUnit6Name("liquid gallon [fl gal]");
      setUnit7Name("dry gallon [dr gal]");
      setUnit8Name("bushel [bsh][bu]");
      setUnit9Name("barrel [bbl]");
    }
  }, [title]);

  let baseValue: Big;
  let metricValue: Big;
  let imperialValue: Big;
  let kitchenValue: Big;
  let americanValue: Big;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const rawValue = event.target.value;
    const inputValue = new Big(
      rawValue === "" || isNaN(Number(rawValue)) ? "0" : rawValue
    );
    const inputTitle = event.target.dataset.title;

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("0.0284130625"));
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("0.56826125"));
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("1.1365225"));
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("4.54609"));
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("36.36872"));
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newImperialVolumeState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newMetricVolumeState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newAmericanVolumeState({
          unit: Big(americanValue).toString(),
        })
      );
      dispatch(
        newKitchenVolumeState({
          unit: Big(kitchenValue).toString(),
        })
      );
    }

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("0.001"));
          imperialValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("0.01"));
          imperialValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("0.1"));
          imperialValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue;
          imperialValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("1000"));
          imperialValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(
        newMetricVolumeState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newImperialVolumeState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newAmericanVolumeState({
          unit: Big(americanValue).toString(),
        })
      );
      dispatch(
        newKitchenVolumeState({
          unit: Big(kitchenValue).toString(),
        })
      );
    }

    if (title === "Kitchen System" && inputTitle === "Kitchen System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("0.005"));
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("0.015"));
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("0.25"));
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("0.284"));
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("0.24"));
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.times(new Big("0.2"));
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue.times(new Big("0.02"));
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;

        default:
          baseValue = inputValue;
      }

      dispatch(
        newImperialVolumeState({
          unit: Big(imperialValue).toString(),
        })
      );

      dispatch(
        newMetricVolumeState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newAmericanVolumeState({
          unit: Big(americanValue).toString(),
        })
      );
      dispatch(
        newKitchenVolumeState({
          unit: Big(baseValue).toString(),
        })
      );
    }

    if (title === "American System" && inputTitle === "American System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue.times(new Big("0.0295735"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue.times(new Big("0.473176473"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue.times(new Big("0.55061"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue.times(new Big("0.946353"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue.times(new Big("1.10122"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue.times(new Big("3.78541"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue.times(new Big("4.40488"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;

        case "unit8":
          baseValue = inputValue.times(new Big("35.23907016688"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
        case "unit9":
          baseValue = inputValue.times(new Big("158.987294928"));
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;

        default:
          baseValue = inputValue;
      }

      dispatch(
        newImperialVolumeState({
          unit: Big(imperialValue).toString(),
        })
      );

      dispatch(
        newMetricVolumeState({
          unit: Big(metricValue).toString(),
        })
      );

      dispatch(
        newAmericanVolumeState({
          unit: Big(baseValue).toString(),
        })
      );

      dispatch(
        newKitchenVolumeState({
          unit: Big(kitchenValue).toString(),
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
        {unit9Name && (
          <div>
            <label htmlFor="">{unit9Name}</label>
            <br />
            <input
              name="unit9"
              className="w-max-[100%] w-[100%] box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold pl-1"
              onChange={handleChange}
              value={
                value?.unit9 ? Big(value.unit9).round(digit).toString() : ""
              }
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
