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
  const baseUnit: number = 1;
  let unit2: number = 0;
  let unit3: number = 0;
  let unit4: number = 0;
  let unit5: number = 0;

  if (unitType == "length") {
    const millimeter = baseUnit;
    unit2 = millimeter * 0.1;
    unit3 = millimeter * 0.01;
    unit4 = millimeter * 0.001;
    unit5 = millimeter * 0.0001;
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] overflow-hidden p-3">
        <div>
          <label htmlFor="">millimeter [mm]</label>
          <br />
          <input className="border-2" type="text" value={baseUnit} />
        </div>
        <div>
          <label htmlFor="">centimiter [cm]</label>
          <br />
          <input className="border-2" type="text" value={unit2} />
        </div>
        <div>
          <label htmlFor="">decimiter [dm]</label>
          <br />
          <input className="border-2" type="text" value={unit3} />
        </div>
        <div>
          <label htmlFor="">miter [m]</label>
          <br />
          <input className="border-2" type="text" value={unit4} />
        </div>
        <div>
          <label htmlFor="">kilomiter [km]</label>
          <br />
          <input className="border-2" type="text" value={unit5} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{metadata}</p>
      </div>
    </div>
  );
}
