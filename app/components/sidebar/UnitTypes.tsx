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

  const systemNames: SystemNames = {
    system1: "",
    system2: "",
    system3: "",
    system4: "",
  };

  // Opening json file
  const unitTableKey: UnitKey = unitTable;
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

    unitNames.unit1 = jsonFile.time.moreThanDay[0].name;
    unitNames.unit2 = jsonFile.time.moreThanDay[1].name;
    unitNames.unit3 = jsonFile.time.moreThanDay[2].name;
    unitNames.unit4 = jsonFile.time.moreThanDay[3].name;
    unitNames.unit5 = jsonFile.time.moreThanDay[4].name;
    unitNames.unit6 = jsonFile.time.moreThanDay[5].name;
    unitNames.unit7 = jsonFile.time.moreThanDay[6].name;
    unitNames.unit8 = jsonFile.time.moreThanDay[7].name;
  }

  if (unitTable === "pressure") {
    units.unit1 = jsonFile[unitTableKey][0].conversionFactor;
    units.unit2 = jsonFile[unitTableKey][1].conversionFactor;
    units.unit3 = jsonFile[unitTableKey][2].conversionFactor;
    units.unit4 = jsonFile[unitTableKey][3].conversionFactor;
    units.unit5 = jsonFile[unitTableKey][4].conversionFactor;
    units.unit6 = jsonFile[unitTableKey][5].conversionFactor;
    units.unit7 = jsonFile[unitTableKey][6].conversionFactor;
    units.unit8 = jsonFile[unitTableKey][7].conversionFactor;
    units.unit9 = jsonFile[unitTableKey][8].conversionFactor;
    units.unit10 = jsonFile[unitTableKey][9].conversionFactor;

    unitNames.unit1 = jsonFile[unitTableKey][0].name;
    unitNames.unit2 = jsonFile[unitTableKey][1].name;
    unitNames.unit3 = jsonFile[unitTableKey][2].name;
    unitNames.unit4 = jsonFile[unitTableKey][3].name;
    unitNames.unit5 = jsonFile[unitTableKey][4].name;
    unitNames.unit6 = jsonFile[unitTableKey][5].name;
    unitNames.unit7 = jsonFile[unitTableKey][6].name;
    unitNames.unit8 = jsonFile[unitTableKey][7].name;
    unitNames.unit9 = jsonFile[unitTableKey][8].name;
    unitNames.unit10 = jsonFile[unitTableKey][9].name;
  }

  if (unitTable === "energy") {
    units.unit1 = jsonFile.energy["Metric System"][0].conversionFactor;
    units.unit2 = jsonFile.energy["Metric System"][1].conversionFactor;
    units.unit3 = jsonFile.energy["Metric System"][2].conversionFactor;
    units.unit4 = jsonFile.energy["Metric System"][3].conversionFactor;
    units.unit5 = jsonFile.energy["Metric System"][4].conversionFactor;
    units.unit6 = jsonFile.energy["Metric System"][5].conversionFactor;
    units.unit7 = jsonFile.energy["Metric System"][6].conversionFactor;

    unitNames.unit1 = jsonFile.energy["Metric System"][0].name;
    unitNames.unit2 = jsonFile.energy["Metric System"][1].name;
    unitNames.unit3 = jsonFile.energy["Metric System"][2].name;
    unitNames.unit4 = jsonFile.energy["Metric System"][3].name;
    unitNames.unit5 = jsonFile.energy["Metric System"][4].name;
    unitNames.unit6 = jsonFile.energy["Metric System"][5].name;
    unitNames.unit7 = jsonFile.energy["Metric System"][6].name;
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
      <h2 className="font-bold text-2xl">{systemNames.system2}</h2>
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
    </div>
  );
};

export default UnitTypes;
