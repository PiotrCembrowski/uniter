"use client";

import { useState, useEffect } from "react";

export default function FileCard({
  title,
  metadata,
  unitType,
}: {
  title: string;
  metadata: string;
  unitType: string;
}) {
  const [baseUnit, setBaseUnit] = useState();
  const [unit1, setUnit1] = useState<number>();
  const [unit2, setUnit2] = useState<number>();
  const [unit3, setUnit3] = useState<number>();
  const [unit4, setUnit4] = useState<number>();
  const [unit5, setUnit5] = useState<number>();

  useEffect(() => {
    console.log("baseUnit", baseUnit);
    if (unitType == "length") {
      setBaseUnit(1);
      console.log("length");
    }
  }, [baseUnit, unitType]);

  const Multiplier = (e) => {
    console.log(e.target.value);
    setUnit1(baseUnit);
    setUnit2(baseUnit * 0.1);
    setUnit3(baseUnit * 0.01);
    setUnit4(baseUnit * 0.001);
    setUnit5(baseUnit * 0.0001);
  };

  const RenderMetrics = (e) => {
    console.log(e.target.value);
    setUnit1(e.target.value);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] overflow-hidden p-3">
        <div>
          <label>millimeter [mm]</label>
          <br />
          <input
            className="border-2"
            type="text"
            onChange={(e) => RenderMetrics(e)}
          />
        </div>
        <div>
          <label htmlFor="">centimiter [cm]</label>
          <br />
          <input className="border-2" type="text" />
        </div>
        <div>
          <label htmlFor="">decimiter [dm]</label>
          <br />
          <input className="border-2" type="text" />
        </div>
        <div>
          <label htmlFor="">miter [m]</label>
          <br />
          <input className="border-2" type="text" />
        </div>
        <div>
          <label htmlFor="">kilomiter [km]</label>
          <br />
          <input className="border-2" type="text" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{metadata}</p>
      </div>
    </div>
  );
}
