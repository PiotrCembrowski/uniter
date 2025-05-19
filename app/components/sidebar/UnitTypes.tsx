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

  // Opening json file
  const unitTableKey: UnitKey = unitTable;
  console.log(jsonFile);

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

  return (
    <div className="mt-2">
      <h5 className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 ml-3 my-1">
        Jednostką ciśnienia w układzie SI jest Paskal [Pa] (Pascal).
      </h5>
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2">Jednostka</th>
            <th className="px-4 py-2">Przelicznik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit1}</td>
            <td className="border px-4 py-2">{units.unit1}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit2}</td>
            <td className="border px-4 py-2">{units.unit2}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit3}</td>
            <td className="border px-4 py-2">{units.unit3}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit4}</td>
            <td className="border px-4 py-2">{units.unit4}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit5}</td>
            <td className="border px-4 py-2">{units.unit5}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit6}</td>
            <td className="border px-4 py-2">{units.unit6}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit7}</td>
            <td className="border px-4 py-2">{units.unit7}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit8}</td>
            <td className="border px-4 py-2">{units.unit8}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit9}</td>
            <td className="border px-4 py-2">{units.unit9}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">{unitNames.unit10}</td>
            <td className="border px-4 py-2">{units.unit10}</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default UnitTypes;
