"use client";

import { useEffect, useState } from "react";
import {
  newMetricVolumeState,
  newImperialVolumeState,
  newAmericanVolumeState,
  newKitchenVolumeState,
} from "@/store";
import { useDispatch } from "react-redux";

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
}

export default function VolumeUnitCard({ title, value }: UnitCardProps) {
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

  let baseValue: number;
  let metricValue: number;
  let imperialValue: number;
  let kitchenValue: number;
  let americanValue: number;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const inputTitle = event.target.dataset.title;
    console.log(inputTitle, inputName, inputValue);

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 0.0284130625;
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 0.56826125;
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 1.1365225;
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 4.54609;
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 36.36872;
          metricValue = baseValue;
          kitchenValue = baseValue;
          americanValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newImperialVolumeState(baseValue));
      dispatch(newMetricVolumeState(metricValue));
      dispatch(newKitchenVolumeState(kitchenValue));
      dispatch(newAmericanVolumeState(americanValue));
    }

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 0.001;
          imperialValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 0.01;
          imperialValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 0.1;
          imperialValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue;
          imperialValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 1000;
          imperialValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newMetricVolumeState(baseValue));
      dispatch(newImperialVolumeState(imperialValue));
      dispatch(newKitchenVolumeState(baseValue));
      dispatch(newAmericanVolumeState(baseValue));
    }

    if (title === "Kitchen System" && inputTitle === "Kitchen System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 5;
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 15;
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 250;
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 284;
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 240;
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 200;
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 20;
          imperialValue = baseValue;
          metricValue = baseValue;
          americanValue = baseValue;
          break;

        default:
          baseValue = inputValue;
      }

      dispatch(newKitchenVolumeState(baseValue));
      dispatch(newImperialVolumeState(imperialValue));
      dispatch(newMetricVolumeState(metricValue));
      dispatch(newAmericanVolumeState(americanValue));
    }

    if (title === "American System" && inputTitle === "American System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 29.5735;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 473.176;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 550.61;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 946.353;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 1101.22;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 3785.41;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue * 4404.88;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;

        case "unit8":
          baseValue = inputValue * 35239.1;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
        case "unit9":
          baseValue = inputValue * 158987.294928;
          imperialValue = baseValue;
          metricValue = baseValue;
          kitchenValue = baseValue;
          break;

        default:
          baseValue = inputValue;
      }

      dispatch(newAmericanVolumeState(baseValue));
      dispatch(newImperialVolumeState(imperialValue));
      dispatch(newMetricVolumeState(metricValue));
      dispatch(newKitchenVolumeState(kitchenValue));
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] p-3">
        <div className="mb-8">
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
        <div>
          <label>{unit1Name}</label>
          <br />
          <input
            name="unit1"
            className="border-2"
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
            className="border-2"
            type="text"
            onChange={handleChange}
            value={value?.unit2}
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
            value={value?.unit3}
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
            value={value?.unit4}
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
            value={value?.unit5}
            data-title={title}
          />
        </div>
        {unit6Name && (
          <div>
            <label htmlFor="">{unit6Name}</label>
            <br />
            <input
              name="unit6"
              className="border-2"
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
              className="border-2"
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
              className="border-2"
              type="text"
              onChange={handleChange}
              value={value?.unit8}
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
              className="border-2"
              type="text"
              onChange={handleChange}
              value={value?.unit9}
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
