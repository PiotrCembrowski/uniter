"use client";

import { useState } from "react";

export default function UnitCard({
  title,
  unitType,
}: {
  title: string;
  unitType: string;
}) {
  const [unit1, setUnit1] = useState<number>(0);
  const [unit2, setUnit2] = useState<number>(0);
  const [unit3, setUnit3] = useState<number>(0);
  const [unit4, setUnit4] = useState<number>(0);
  const [unit5, setUnit5] = useState<number>(0);

  const Multiplier = (unit: number) => {
    if (title === "Metric System") {
      setUnit1(unit);
      setUnit2(unit * 0.1);
      setUnit3(unit * 0.01);
      setUnit4(unit * 0.001);
      setUnit5(unit * 0.000001);
    }
    if (title === "Imperial System") {
      setUnit1(unit);
      setUnit2(unit * 0.0833333);
      setUnit3(unit * 0.0277778);
      setUnit4(unit * 0.000568182);
      setUnit5(unit * 0.000015783);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = Number(event.target.value);

    let baseValue: number;

    if (title === "Imperial System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          break;
        case "unit2":
          baseValue = inputValue * 12;
          break;
        case "unit3":
          baseValue = inputValue * 36;
          break;
        case "unit4":
          baseValue = inputValue * 63360;
          break;
        case "unit5":
          baseValue = inputValue * 190000;
          break;
        default:
          baseValue = inputValue;
      }
      Multiplier(baseValue);
    }

    if (title === "Metric System") {
      switch (inputName) {
        case "unit1":
          baseValue = inputValue;
          break;
        case "unit2":
          baseValue = inputValue * 10;
          break;
        case "unit3":
          baseValue = inputValue * 100;
          break;
        case "unit4":
          baseValue = inputValue * 1000;
          break;
        case "unit5":
          baseValue = inputValue * 1000000;
          break;
        default:
          baseValue = inputValue;
      }
      Multiplier(baseValue);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] p-3">
        <div className="mb-8">
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
        <div>
          <label>millimeter [mm]</label>
          <br />
          <input
            name="unit1"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={unit1}
          />
        </div>
        <div>
          <label htmlFor="">centimeter [cm]</label>
          <br />
          <input
            name="unit2"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={unit2}
          />
        </div>
        <div>
          <label htmlFor="">decimeter [dm]</label>
          <br />
          <input
            name="unit3"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={unit3}
          />
        </div>
        <div>
          <label htmlFor="">meter [m]</label>
          <br />
          <input
            name="unit4"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={unit4}
          />
        </div>
        <div>
          <label htmlFor="">kilometer [km]</label>
          <br />
          <input
            name="unit5"
            className="border-2"
            type="text"
            onChange={handleChange}
            value={unit5}
          />
        </div>
      </div>
    </div>
  );
}
