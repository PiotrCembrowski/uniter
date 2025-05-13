"use client";

import { useEffect, useState } from "react";
import { newImperialState, newMetricState } from "@/store";
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

export default function MetricUnitCard({ title, value }: UnitCardProps) {
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

  let baseValue: number;
  let imperialValue: number;
  let metricValue: number;
  let seaValue: number;
  let astronomicValue: number;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const inputTitle = event.target.dataset.title;

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          metricValue = baseValue * 25.4;
          break;
        case "unit2":
          baseValue = inputValue * 12;
          metricValue = baseValue * 25.4;
          break;
        case "unit3":
          baseValue = inputValue * 36;
          metricValue = baseValue * 25.4;
          break;
        case "unit4":
          baseValue = inputValue * 63360;
          metricValue = baseValue * 25.4;
          break;
        case "unit5":
          baseValue = inputValue * 190000;
          metricValue = baseValue * 25.4;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newImperialState(baseValue));
      dispatch(newMetricState(metricValue));
    }

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          imperialValue = baseValue / 25.4;
          break;
        case "unit2":
          baseValue = inputValue * 10;
          imperialValue = baseValue / 25.4;
          break;
        case "unit3":
          baseValue = inputValue * 100;
          imperialValue = baseValue / 25.4;
          break;
        case "unit4":
          baseValue = inputValue * 1000;
          imperialValue = baseValue / 25.4;
          break;
        case "unit5":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue / 25.4;
          break;
        default:
          baseValue = inputValue;
      }
      dispatch(newMetricState(baseValue));
      dispatch(newImperialState(imperialValue));
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
      </div>
    </div>
  );
}
