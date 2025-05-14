"use client";

import { useEffect, useState } from "react";
import { newImperialState, newMetricState } from "@/store";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";

export interface ValuesMass {
  unit1: number;
  unit2: number;
  unit3: number;
  unit4: number;
  unit5: number;
  unit6?: number;
  unit7?: number;
  unit8?: number;
}
export interface UnitCardProps {
  title: string;
  value?: ValuesMass;
}

export default function MassUnitCard({ title }: { title: string }) {
  const dispatch = useDispatch();
  const imperialState = useAppSelector((state) => state.massSlice.imperial);
  const metricState = useAppSelector((state) => state.massSlice.metric);

  // useState vars
  const [unit1Name, setUnit1Name] = useState<string>();
  const [unit2Name, setUnit2Name] = useState<string>();
  const [unit3Name, setUnit3Name] = useState<string>();
  const [unit4Name, setUnit4Name] = useState<string>();
  const [unit5Name, setUnit5Name] = useState<string>();
  const [unit6Name, setUnit6Name] = useState<string>();
  const [unit7Name, setUnit7Name] = useState<string>();
  const [unit8Name, setUnit8Name] = useState<string>();
  const [unitValue, setUnitValue] = useState<ValuesMass>({
    unit1: 0,
    unit2: 0,
    unit3: 0,
    unit4: 0,
    unit5: 0,
    unit6: 0,
    unit7: 0,
    unit8: 0,
  });

  useEffect(() => {
    console.log("MassUnitCard", imperialState, metricState);

    if (title === "Mass imperial") {
      setUnit1Name("uncja [oz]]");
      setUnit2Name("pound [lb]");
      setUnit3Name("stone [st]");
      setUnit4Name("cetnar us.]");
      setUnit5Name("cetnar ang. [cwt]");
      setUnit6Name("tona krótka [tonUS]");
      setUnit7Name("tona długa [tonUK]");
      setUnit8Name("grain [gr]");

      setUnitValue({
        unit1: imperialState.unit1,
        unit2: imperialState.unit2,
        unit3: imperialState.unit3,
        unit4: imperialState.unit4,
        unit5: imperialState.unit5,
        unit6: imperialState.unit6,
        unit7: imperialState.unit7,
        unit8: imperialState.unit8,
      });
    }
    if (title === "Mass metric") {
      setUnit1Name("miligram [mg]]");
      setUnit2Name("gram [g]");
      setUnit3Name("dekagram [dkg]");
      setUnit4Name("kilogram [kg]");
      setUnit5Name("tone [T]]");

      setUnitValue({
        unit1: imperialState.unit1,
        unit2: imperialState.unit2,
        unit3: imperialState.unit3,
        unit4: imperialState.unit4,
        unit5: imperialState.unit5,
      });
    }
  }, [title, imperialState, metricState]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(event.target.value);
    const inputTitle = event.target.dataset.title;

    if (title === "Mass imperial" && inputTitle === "Mass imperial") {
      dispatch(newImperialState(inputValue));
    }

    if (title === "Mass metric" && inputTitle === "Mass metric") {
      dispatch(newMetricState(inputValue));
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
            value={unitValue?.unit1}
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
            value={unitValue?.unit2}
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
            value={unitValue?.unit3}
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
            value={unitValue?.unit4}
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
            value={unitValue?.unit5}
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
              value={unitValue?.unit6}
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
              value={unitValue?.unit7}
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
              value={unitValue?.unit8}
              data-title={title}
            />
          </div>
        )}
      </div>
    </div>
  );
}
