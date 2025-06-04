"use client";

import { newImperialSurfaceState, newMetricSurfaceState } from "@/store";
import { useEffect, useState } from "react";
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

export default function SurfaceUnitCard({ title, values }: UnitCardProps) {
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();

  useEffect(() => {
    setUnit1Name("milimeter2 [mm2]");
    setUnit2Name("centimeter2 [cm2]");
    setUnit3Name("decimiter2 [dm2]");
    setUnit4Name("meter2 [m2]");
    setUnit5Name("kilometr2 [km2]");
    setUnit6Name("ar [ar]");
    setUnit7Name("hektar [ha]");
  }, []);

  let baseValue: number;
  let metricValue: number;
  let imperialValue: number;
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);
    const inputTitle = event.target.dataset.title;

    if (title === "Metric System" && inputTitle === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 0.000001;
          imperialValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 0.0001;
          imperialValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 0.01;
          imperialValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue;
          imperialValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 1000000;
          imperialValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue / 100;
          imperialValue = baseValue;
          break;
        case "unit7":
          baseValue = inputValue / 10000;
          imperialValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newMetricSurfaceState(baseValue));
      dispatch(newImperialSurfaceState(imperialValue));
    }

    if (title === "Imperial System" && inputTitle === "Imperial System") {
      console.log("Imperial System Input:", inputValue);

      switch (inputName) {
        case "unit1":
          baseValue = inputValue * 0.00064516;
          metricValue = baseValue;
          break;
        case "unit2":
          baseValue = inputValue * 0.09290304;
          metricValue = baseValue;
          break;
        case "unit3":
          baseValue = inputValue * 0.83612736;
          metricValue = baseValue;
          break;
        case "unit4":
          baseValue = inputValue * 2589988.110336;
          metricValue = baseValue;
          break;
        case "unit5":
          baseValue = inputValue * 4046.8564224;
          metricValue = baseValue;
          break;
        case "unit6":
          baseValue = inputValue * 4046.87261;
          metricValue = baseValue;
          break;
        default:
          baseValue = inputValue;
      }

      dispatch(newImperialSurfaceState(baseValue));
      dispatch(newMetricSurfaceState(metricValue));
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#46A66F] bg-[#4F3E8C]  text-[#afa0e2]">
      <div className="aspect-[4/3] p-3">
        <div className="mb-8">
          <h3 className="font-medium">{title}</h3>
        </div>
        <div>
          <label>{unit1Name}</label>
          <br />
          <input
            name="unit1"
            className="box-border border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold"
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
            className="border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold"
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
              className="border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold"
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
              className="border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold"
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
              className="border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold"
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
              className="border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold"
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
              className="border-2 border-[#9177F2] bg-[#4F3E8C] text-[#46A66F] font-bold"
              type="text"
              onChange={handleChange}
              value={values?.unit7}
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
