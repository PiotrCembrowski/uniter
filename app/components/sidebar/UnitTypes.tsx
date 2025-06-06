import * as lib from "../../../lib/unitsCalc.json";

type Units = {
  unit1: number;
  unit2?: number;
  unit3?: number;
  unit4?: number;
  unit5?: number;
  unit6?: number;
  unit7?: number;
  unit8?: number;
  unit9?: number;
  unit10?: number;
};

type UnitNames = {
  unit1: string;
  unit2?: string;
  unit3?: string;
  unit4?: string;
  unit5?: string;
  unit6?: string;
  unit7?: string;
  unit8?: string;
  unit9?: string;
  unit10?: string;
};

type SystemNames = {
  system1: string;
  system2?: string;
  system3?: string;
  system4?: string;
};

const jsonFile = lib;
type UnitKey = keyof typeof jsonFile;

const UnitTypes = ({ unitTable }: { unitTable: UnitKey }) => {
  const units: Units = {
    unit1: 0,
    unit2: 0,
    unit3: 0,
    unit4: 0,
    unit5: 0,
    unit6: 0,
    unit7: 0,
    unit8: 0,
    unit9: 0,
    unit10: 0,
  };
  const unitNames: UnitNames = {
    unit1: "",
    unit2: "",
    unit3: "",
    unit4: "",
    unit5: "",
    unit6: "",
    unit7: "",
    unit8: "",
    unit9: "",
    unit10: "",
  };

  const units2: Units = {
    unit1: 0,
    unit2: 0,
    unit3: 0,
    unit4: 0,
    unit5: 0,
    unit6: 0,
    unit7: 0,
    unit8: 0,
    unit9: 0,
    unit10: 0,
  };

  const unitNames2: UnitNames = {
    unit1: "",
    unit2: "",
    unit3: "",
    unit4: "",
    unit5: "",
    unit6: "",
    unit7: "",
    unit8: "",
    unit9: "",
    unit10: "",
  };

  const units3: Units = {
    unit1: 0,
    unit2: 0,
    unit3: 0,
    unit4: 0,
    unit5: 0,
    unit6: 0,
    unit7: 0,
    unit8: 0,
    unit9: 0,
    unit10: 0,
  };

  const unitNames3: UnitNames = {
    unit1: "",
    unit2: "",
    unit3: "",
    unit4: "",
    unit5: "",
    unit6: "",
    unit7: "",
    unit8: "",
    unit9: "",
    unit10: "",
  };

  const units4: Units = {
    unit1: 0,
    unit2: 0,
    unit3: 0,
    unit4: 0,
    unit5: 0,
    unit6: 0,
    unit7: 0,
    unit8: 0,
    unit9: 0,
    unit10: 0,
  };

  const unitNames4: UnitNames = {
    unit1: "",
    unit2: "",
    unit3: "",
    unit4: "",
    unit5: "",
    unit6: "",
    unit7: "",
    unit8: "",
    unit9: "",
    unit10: "",
  };

  const systemNames: SystemNames = {
    system1: "",
    system2: "",
    system3: "",
    system4: "",
  };

  console.log(jsonFile);

  if (unitTable === "length") {
    units.unit1 = jsonFile.length.metric[0].conversionFactor;
    units.unit2 = jsonFile.length.metric[1].conversionFactor;
    units.unit3 = jsonFile.length.metric[2].conversionFactor;
    units.unit4 = jsonFile.length.metric[3].conversionFactor;
    units.unit5 = jsonFile.length.metric[4].conversionFactor;

    units2.unit1 = jsonFile.length.imperial[0].conversionFactor;
    units2.unit2 = jsonFile.length.imperial[1].conversionFactor;
    units2.unit3 = jsonFile.length.imperial[2].conversionFactor;
    units2.unit4 = jsonFile.length.imperial[3].conversionFactor;
    units2.unit5 = jsonFile.length.imperial[4].conversionFactor;

    unitNames.unit1 = jsonFile.length.metric[0].name;
    unitNames.unit2 = jsonFile.length.metric[1].name;
    unitNames.unit3 = jsonFile.length.metric[2].name;
    unitNames.unit4 = jsonFile.length.metric[3].name;
    unitNames.unit5 = jsonFile.length.metric[4].name;

    unitNames2.unit1 = jsonFile.length.imperial[0].name;
    unitNames2.unit2 = jsonFile.length.imperial[1].name;
    unitNames2.unit3 = jsonFile.length.imperial[2].name;
    unitNames2.unit4 = jsonFile.length.imperial[3].name;
    unitNames2.unit5 = jsonFile.length.imperial[4].name;

    systemNames.system1 = "Metric System";
    systemNames.system2 = "Imperial System";
  }

  if (unitTable === "time") {
    units.unit1 = jsonFile.time.day[0].conversionFactor;
    units.unit2 = jsonFile.time.day[1].conversionFactor;
    units.unit3 = jsonFile.time.day[2].conversionFactor;
    units.unit4 = jsonFile.time.day[3].conversionFactor;
    units.unit5 = jsonFile.time.day[4].conversionFactor;
    units.unit6 = jsonFile.time.day[5].conversionFactor;
    units.unit7 = jsonFile.time.day[6].conversionFactor;
    units.unit8 = jsonFile.time.day[7].conversionFactor;

    units2.unit1 = jsonFile.time.moreThanDay[0].conversionFactor;
    units2.unit2 = jsonFile.time.moreThanDay[1].conversionFactor;
    units2.unit3 = jsonFile.time.moreThanDay[2].conversionFactor;
    units2.unit4 = jsonFile.time.moreThanDay[3].conversionFactor;
    units2.unit5 = jsonFile.time.moreThanDay[4].conversionFactor;
    units2.unit6 = jsonFile.time.moreThanDay[5].conversionFactor;
    units2.unit7 = jsonFile.time.moreThanDay[6].conversionFactor;
    units2.unit8 = jsonFile.time.moreThanDay[7].conversionFactor;

    unitNames.unit1 = jsonFile.time.day[0].name;
    unitNames.unit2 = jsonFile.time.day[1].name;
    unitNames.unit3 = jsonFile.time.day[2].name;
    unitNames.unit4 = jsonFile.time.day[3].name;
    unitNames.unit5 = jsonFile.time.day[4].name;
    unitNames.unit6 = jsonFile.time.day[5].name;
    unitNames.unit7 = jsonFile.time.day[6].name;
    unitNames.unit8 = jsonFile.time.day[7].name;

    unitNames2.unit1 = jsonFile.time.moreThanDay[0].name;
    unitNames2.unit2 = jsonFile.time.moreThanDay[1].name;
    unitNames2.unit3 = jsonFile.time.moreThanDay[2].name;
    unitNames2.unit4 = jsonFile.time.moreThanDay[3].name;
    unitNames2.unit5 = jsonFile.time.moreThanDay[4].name;
    unitNames2.unit6 = jsonFile.time.moreThanDay[5].name;
    unitNames2.unit7 = jsonFile.time.moreThanDay[6].name;
    unitNames2.unit8 = jsonFile.time.moreThanDay[7].name;

    systemNames.system1 = "Day System";
    systemNames.system2 = "More Than Day System";
  }

  if (unitTable === "pressure") {
    units.unit1 = jsonFile.pressure[0].conversionFactor;
    units.unit2 = jsonFile.pressure[1].conversionFactor;
    units.unit3 = jsonFile.pressure[2].conversionFactor;
    units.unit4 = jsonFile.pressure[3].conversionFactor;
    units.unit5 = jsonFile.pressure[4].conversionFactor;
    units.unit6 = jsonFile.pressure[5].conversionFactor;
    units.unit7 = jsonFile.pressure[6].conversionFactor;
    units.unit8 = jsonFile.pressure[7].conversionFactor;
    units.unit9 = jsonFile.pressure[8].conversionFactor;
    units.unit10 = jsonFile.pressure[9].conversionFactor;

    unitNames.unit1 = jsonFile.pressure[0].name;
    unitNames.unit2 = jsonFile.pressure[1].name;
    unitNames.unit3 = jsonFile.pressure[2].name;
    unitNames.unit4 = jsonFile.pressure[3].name;
    unitNames.unit5 = jsonFile.pressure[4].name;
    unitNames.unit6 = jsonFile.pressure[5].name;
    unitNames.unit7 = jsonFile.pressure[6].name;
    unitNames.unit8 = jsonFile.pressure[7].name;
    unitNames.unit9 = jsonFile.pressure[8].name;
    unitNames.unit10 = jsonFile.pressure[9].name;
  }

  if (unitTable === "energy") {
    units.unit1 = jsonFile.energy["Metric System"][0].conversionFactor;
    units.unit2 = jsonFile.energy["Metric System"][1].conversionFactor;
    units.unit3 = jsonFile.energy["Metric System"][2].conversionFactor;
    units.unit4 = jsonFile.energy["Metric System"][3].conversionFactor;
    units.unit5 = jsonFile.energy["Metric System"][4].conversionFactor;
    units.unit6 = jsonFile.energy["Metric System"][5].conversionFactor;
    units.unit7 = jsonFile.energy["Metric System"][6].conversionFactor;

    units2.unit1 = jsonFile.energy["Imperial System"][0].conversionFactor;
    units2.unit2 = jsonFile.energy["Imperial System"][1].conversionFactor;
    units2.unit3 = jsonFile.energy["Imperial System"][2].conversionFactor;
    units2.unit4 = jsonFile.energy["Imperial System"][3].conversionFactor;
    units2.unit5 = jsonFile.energy["Imperial System"][4].conversionFactor;

    units3.unit1 = jsonFile.energy["Calories"][0].conversionFactor;
    units3.unit2 = jsonFile.energy["Calories"][1].conversionFactor;

    units4.unit1 = jsonFile.energy["Atomic Units"][0].conversionFactor;
    units4.unit2 = jsonFile.energy["Atomic Units"][1].conversionFactor;
    units4.unit3 = jsonFile.energy["Atomic Units"][2].conversionFactor;
    units4.unit4 = jsonFile.energy["Atomic Units"][3].conversionFactor;
    units4.unit5 = jsonFile.energy["Atomic Units"][4].conversionFactor;
    units4.unit6 = jsonFile.energy["Atomic Units"][5].conversionFactor;
    units4.unit7 = jsonFile.energy["Atomic Units"][6].conversionFactor;
    units4.unit8 = jsonFile.energy["Atomic Units"][7].conversionFactor;

    unitNames.unit1 = jsonFile.energy["Metric System"][0].name;
    unitNames.unit2 = jsonFile.energy["Metric System"][1].name;
    unitNames.unit3 = jsonFile.energy["Metric System"][2].name;
    unitNames.unit4 = jsonFile.energy["Metric System"][3].name;
    unitNames.unit5 = jsonFile.energy["Metric System"][4].name;
    unitNames.unit6 = jsonFile.energy["Metric System"][5].name;
    unitNames.unit7 = jsonFile.energy["Metric System"][6].name;

    unitNames2.unit1 = jsonFile.energy["Imperial System"][0].name;
    unitNames2.unit2 = jsonFile.energy["Imperial System"][1].name;
    unitNames2.unit3 = jsonFile.energy["Imperial System"][2].name;
    unitNames2.unit4 = jsonFile.energy["Imperial System"][3].name;
    unitNames2.unit5 = jsonFile.energy["Imperial System"][4].name;

    unitNames3.unit1 = jsonFile.energy["Calories"][0].name;
    unitNames3.unit2 = jsonFile.energy["Calories"][1].name;

    unitNames4.unit1 = jsonFile.energy["Atomic Units"][0].name;
    unitNames4.unit2 = jsonFile.energy["Atomic Units"][1].name;
    unitNames4.unit3 = jsonFile.energy["Atomic Units"][2].name;
    unitNames4.unit4 = jsonFile.energy["Atomic Units"][3].name;
    unitNames4.unit5 = jsonFile.energy["Atomic Units"][4].name;
    unitNames4.unit6 = jsonFile.energy["Atomic Units"][5].name;
    unitNames4.unit7 = jsonFile.energy["Atomic Units"][6].name;
    unitNames4.unit8 = jsonFile.energy["Atomic Units"][7].name;

    systemNames.system1 = "Metric System";
    systemNames.system2 = "Imperial System";
    systemNames.system3 = "Calories";
    systemNames.system4 = "Atomic Units";
  }

  if (unitTable === "power") {
    units.unit1 = jsonFile.power[0].conversionFactor;
    units.unit2 = jsonFile.power[1].conversionFactor;
    units.unit3 = jsonFile.power[2].conversionFactor;
    units.unit4 = jsonFile.power[3].conversionFactor;
    units.unit5 = jsonFile.power[4].conversionFactor;
    units.unit6 = jsonFile.power[5].conversionFactor;
    units.unit7 = jsonFile.power[6].conversionFactor;

    unitNames.unit1 = jsonFile.power[0].name;
    unitNames.unit2 = jsonFile.power[1].name;
    unitNames.unit3 = jsonFile.power[2].name;
    unitNames.unit4 = jsonFile.power[3].name;
    unitNames.unit5 = jsonFile.power[4].name;
    unitNames.unit6 = jsonFile.power[5].name;
    unitNames.unit7 = jsonFile.power[6].name;
  }

  if (unitTable === "volume") {
    units.unit1 = jsonFile.volume.metric[0].conversionFactor;
    units.unit2 = jsonFile.volume.metric[1].conversionFactor;
    units.unit3 = jsonFile.volume.metric[2].conversionFactor;
    units.unit4 = jsonFile.volume.metric[3].conversionFactor;
    units.unit5 = jsonFile.volume.metric[4].conversionFactor;

    units2.unit1 = jsonFile.volume.imperial[0].conversionFactor;
    units2.unit2 = jsonFile.volume.imperial[1].conversionFactor;
    units2.unit3 = jsonFile.volume.imperial[2].conversionFactor;
    units2.unit4 = jsonFile.volume.imperial[3].conversionFactor;
    units2.unit5 = jsonFile.volume.imperial[4].conversionFactor;

    units3.unit1 = jsonFile.volume.american[0].conversionFactor;
    units3.unit2 = jsonFile.volume.american[1].conversionFactor;
    units3.unit3 = jsonFile.volume.american[2].conversionFactor;
    units3.unit4 = jsonFile.volume.american[3].conversionFactor;
    units3.unit5 = jsonFile.volume.american[4].conversionFactor;
    units3.unit6 = jsonFile.volume.american[5].conversionFactor;
    units3.unit7 = jsonFile.volume.american[6].conversionFactor;

    units4.unit1 = jsonFile.volume.kitchen[0].conversionFactor;
    units4.unit2 = jsonFile.volume.kitchen[1].conversionFactor;
    units4.unit3 = jsonFile.volume.kitchen[2].conversionFactor;
    units4.unit4 = jsonFile.volume.kitchen[3].conversionFactor;
    units4.unit5 = jsonFile.volume.kitchen[4].conversionFactor;
    units4.unit6 = jsonFile.volume.kitchen[5].conversionFactor;
    units4.unit7 = jsonFile.volume.kitchen[6].conversionFactor;

    unitNames.unit1 = jsonFile.volume.metric[0].name;
    unitNames.unit2 = jsonFile.volume.metric[1].name;
    unitNames.unit3 = jsonFile.volume.metric[2].name;
    unitNames.unit4 = jsonFile.volume.metric[3].name;
    unitNames.unit5 = jsonFile.volume.metric[4].name;

    unitNames2.unit1 = jsonFile.volume.imperial[0].name;
    unitNames2.unit2 = jsonFile.volume.imperial[1].name;
    unitNames2.unit3 = jsonFile.volume.imperial[2].name;
    unitNames2.unit4 = jsonFile.volume.imperial[3].name;
    unitNames2.unit5 = jsonFile.volume.imperial[4].name;

    unitNames3.unit1 = jsonFile.volume.american[0].name;
    unitNames3.unit2 = jsonFile.volume.american[1].name;
    unitNames3.unit3 = jsonFile.volume.american[2].name;
    unitNames3.unit4 = jsonFile.volume.american[3].name;
    unitNames3.unit5 = jsonFile.volume.american[4].name;
    unitNames3.unit6 = jsonFile.volume.american[5].name;
    unitNames3.unit7 = jsonFile.volume.american[6].name;

    unitNames4.unit1 = jsonFile.volume.kitchen[0].name;
    unitNames4.unit2 = jsonFile.volume.kitchen[1].name;
    unitNames4.unit3 = jsonFile.volume.kitchen[2].name;
    unitNames4.unit4 = jsonFile.volume.kitchen[3].name;
    unitNames4.unit5 = jsonFile.volume.kitchen[4].name;
    unitNames4.unit6 = jsonFile.volume.kitchen[5].name;
    unitNames4.unit7 = jsonFile.volume.kitchen[6].name;

    systemNames.system1 = "Metric System";
    systemNames.system2 = "Imperial System";
    systemNames.system3 = "American System";
    systemNames.system4 = "Kitchen System";
  }

  if (unitTable === "surface") {
    units.unit1 = jsonFile.surface.metric[0].conversionFactor;
    units.unit2 = jsonFile.surface.metric[1].conversionFactor;
    units.unit3 = jsonFile.surface.metric[2].conversionFactor;
    units.unit4 = jsonFile.surface.metric[3].conversionFactor;
    units.unit5 = jsonFile.surface.metric[4].conversionFactor;
    units.unit6 = jsonFile.surface.metric[5].conversionFactor;
    units.unit7 = jsonFile.surface.metric[6].conversionFactor;

    units2.unit1 = jsonFile.surface.imperial[0].conversionFactor;
    units2.unit2 = jsonFile.surface.imperial[1].conversionFactor;
    units2.unit3 = jsonFile.surface.imperial[2].conversionFactor;
    units2.unit4 = jsonFile.surface.imperial[3].conversionFactor;
    units2.unit5 = jsonFile.surface.imperial[4].conversionFactor;
    units2.unit6 = jsonFile.surface.imperial[5].conversionFactor;

    unitNames.unit1 = jsonFile.surface.metric[0].name;
    unitNames.unit2 = jsonFile.surface.metric[1].name;
    unitNames.unit3 = jsonFile.surface.metric[2].name;
    unitNames.unit4 = jsonFile.surface.metric[3].name;
    unitNames.unit5 = jsonFile.surface.metric[4].name;
    unitNames.unit6 = jsonFile.surface.metric[5].name;
    unitNames.unit7 = jsonFile.surface.metric[6].name;

    unitNames2.unit1 = jsonFile.surface.imperial[0].name;
    unitNames2.unit2 = jsonFile.surface.imperial[1].name;
    unitNames2.unit3 = jsonFile.surface.imperial[2].name;
    unitNames2.unit4 = jsonFile.surface.imperial[3].name;
    unitNames2.unit5 = jsonFile.surface.imperial[4].name;
    unitNames2.unit6 = jsonFile.surface.imperial[5].name;

    systemNames.system1 = "Metric System";
    systemNames.system2 = "Imperial System";
  }

  if (unitTable === "speed") {
    units.unit1 = jsonFile.speed[0].conversionFactor;
    units.unit2 = jsonFile.speed[1].conversionFactor;
    units.unit3 = jsonFile.speed[2].conversionFactor;
    units.unit4 = jsonFile.speed[3].conversionFactor;
    units.unit5 = jsonFile.speed[4].conversionFactor;
    units.unit6 = jsonFile.speed[5].conversionFactor;
    units.unit7 = jsonFile.speed[6].conversionFactor;
    units.unit8 = jsonFile.speed[7].conversionFactor;
    units.unit9 = jsonFile.speed[8].conversionFactor;

    unitNames.unit1 = jsonFile.speed[0].name;
    unitNames.unit2 = jsonFile.speed[1].name;
    unitNames.unit3 = jsonFile.speed[2].name;
    unitNames.unit4 = jsonFile.speed[3].name;
    unitNames.unit5 = jsonFile.speed[4].name;
    unitNames.unit6 = jsonFile.speed[5].name;
    unitNames.unit7 = jsonFile.speed[6].name;
    unitNames.unit8 = jsonFile.speed[7].name;
    unitNames.unit9 = jsonFile.speed[8].name;
  }

  return (
    <div className="mt-2 pl-2 height-auto">
      <h5 className="my-1">
        Jednostką ciśnienia w układzie SI jest Paskal [Pa] (Pascal).
      </h5>
      <h2 className="font-bold text-2xl">{systemNames.system1}</h2>
      <table className="mt-3 mb-8">
        <thead className="">
          <tr>
            <th className="px-4 py-2">Jednostka</th>
            <th className="px-4 py-2">Przelicznik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#4F3E8C] px-4 py-2">
              {unitNames.unit1}
            </td>
            <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
              {units.unit1}
            </td>
          </tr>
          <tr>
            <td className="border border-[#4F3E8C] px-4 py-2">
              {unitNames.unit2}
            </td>
            <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
              {units.unit2}
            </td>
          </tr>
          <tr>
            <td className="border border-[#4F3E8C] px-4 py-2">
              {unitNames.unit3}
            </td>
            <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
              {units.unit3}
            </td>
          </tr>
          <tr>
            <td className="border border-[#4F3E8C] px-4 py-2">
              {unitNames.unit4}
            </td>
            <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
              {units.unit4}
            </td>
          </tr>
          <tr>
            <td className="border border-[#4F3E8C] px-4 py-2">
              {unitNames.unit5}
            </td>
            <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
              {units.unit5}
            </td>
          </tr>
          {unitNames.unit6 && (
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames.unit6}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units.unit6}
              </td>
            </tr>
          )}
          {unitNames.unit7 && (
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames.unit7}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units.unit7}
              </td>
            </tr>
          )}
          {unitNames.unit8 && (
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames.unit8}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units.unit8}
              </td>
            </tr>
          )}
          {unitNames.unit9 && (
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames.unit9}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units.unit9}
              </td>
            </tr>
          )}
          {unitNames.unit10 && (
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames.unit10}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units.unit10}
              </td>
            </tr>
          )}
          {/* Add more rows as needed */}
        </tbody>
      </table>
      {systemNames.system2 && (
        <h2 className="font-bold text-2xl">{systemNames.system2}</h2>
      )}
      {systemNames.system2 && (
        <table className="mt-3">
          <thead className="">
            <tr>
              <th className="px-4 py-2">Jednostka</th>
              <th className="px-4 py-2">Przelicznik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames2.unit1}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units2.unit1}
              </td>
            </tr>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames2.unit2}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units2.unit2}
              </td>
            </tr>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames2.unit3}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units2.unit3}
              </td>
            </tr>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames2.unit4}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units2.unit4}
              </td>
            </tr>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames2.unit5}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units2.unit5}
              </td>
            </tr>
            {unitNames2.unit6 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames2.unit6}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units2.unit6}
                </td>
              </tr>
            )}
            {unitNames2.unit7 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames2.unit7}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units2.unit7}
                </td>
              </tr>
            )}
            {unitNames2.unit8 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames2.unit8}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units2.unit8}
                </td>
              </tr>
            )}
            {unitNames2.unit9 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames2.unit9}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units2.unit9}
                </td>
              </tr>
            )}
            {unitNames2.unit10 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames2.unit10}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units2.unit10}
                </td>
              </tr>
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      )}
      {systemNames.system3 && (
        <h2 className="font-bold text-2xl">{systemNames.system3}</h2>
      )}
      {unitNames3.unit1 && (
        <table className="mt-3">
          <thead className="">
            <tr>
              <th className="px-4 py-2">Jednostka</th>
              <th className="px-4 py-2">Przelicznik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames3.unit1}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units3.unit1}
              </td>
            </tr>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames3.unit2}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units3.unit2}
              </td>
            </tr>
            {unitNames3.unit3 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit3}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit3}
                </td>
              </tr>
            )}
            {unitNames3.unit4 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit4}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit4}
                </td>
              </tr>
            )}
            {unitNames3.unit5 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit5}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit5}
                </td>
              </tr>
            )}

            {unitNames3.unit6 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit6}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit6}
                </td>
              </tr>
            )}
            {unitNames3.unit7 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit7}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit7}
                </td>
              </tr>
            )}
            {unitNames3.unit8 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit8}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit8}
                </td>
              </tr>
            )}
            {unitNames3.unit9 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit9}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit9}
                </td>
              </tr>
            )}
            {unitNames3.unit10 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames3.unit10}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units3.unit10}
                </td>
              </tr>
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      )}
      {systemNames.system4 && (
        <h2 className="font-bold text-2xl">{systemNames.system3}</h2>
      )}
      {unitNames4.unit1 && (
        <table className="mt-3">
          <thead className="">
            <tr>
              <th className="px-4 py-2">Jednostka</th>
              <th className="px-4 py-2">Przelicznik</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames4.unit1}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units4.unit1}
              </td>
            </tr>
            <tr>
              <td className="border border-[#4F3E8C] px-4 py-2">
                {unitNames4.unit2}
              </td>
              <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                {units4.unit2}
              </td>
            </tr>
            {unitNames4.unit3 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit3}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit3}
                </td>
              </tr>
            )}
            {unitNames4.unit4 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit4}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit4}
                </td>
              </tr>
            )}
            {unitNames4.unit5 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit5}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit5}
                </td>
              </tr>
            )}

            {unitNames4.unit6 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit6}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit6}
                </td>
              </tr>
            )}
            {unitNames4.unit7 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit7}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit7}
                </td>
              </tr>
            )}
            {unitNames4.unit8 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit8}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit8}
                </td>
              </tr>
            )}
            {unitNames4.unit9 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit9}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit9}
                </td>
              </tr>
            )}
            {unitNames4.unit10 && (
              <tr>
                <td className="border border-[#4F3E8C] px-4 py-2">
                  {unitNames4.unit10}
                </td>
                <td className="border border-[#4F3E8C] px-4 py-2 text-[#46A66F] font-bold">
                  {units4.unit10}
                </td>
              </tr>
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UnitTypes;
