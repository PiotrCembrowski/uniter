import * as lib from "../../../lib/unitsCalc.json";

type Units = {
  unit1: number;
  unit2: number;
  unit3: number;
  unit4: number;
  unit5: number;
  unit6: number;
  unit7: number;
  unit8: number;
  unit9: number;
  unit10: number;
};

type UnitNames = {
  unit1: string;
  unit2: string;
  unit3: string;
  unit4: string;
  unit5: string;
  unit6: string;
  unit7: string;
  unit8: string;
  unit9: string;
  unit10: string;
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

  // Opening json file
  const unitTableKey: UnitKey = unitTable;

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

  const unitNames: UnitNames = {
    unit1: jsonFile[unitTableKey][0].name,
    unit2: jsonFile[unitTableKey][1].name,
    unit3: jsonFile[unitTableKey][2].name,
    unit4: jsonFile[unitTableKey][3].name,
    unit5: jsonFile[unitTableKey][4].name,
    unit6: jsonFile[unitTableKey][5].name,
    unit7: jsonFile[unitTableKey][6].name,
    unit8: jsonFile[unitTableKey][7].name,
    unit9: jsonFile[unitTableKey][8].name,
    unit10: jsonFile[unitTableKey][9].name,
  };

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
            <td className="border px-4 py-2">Pascal</td>
            <td className="border px-4 py-2">1 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Bar</td>
            <td className="border px-4 py-2">100000 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Kilopascal</td>
            <td className="border px-4 py-2">1000 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Megapascal</td>
            <td className="border px-4 py-2">1000000 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Hektopascal</td>
            <td className="border px-4 py-2">100 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Milimetr słupa rtęci</td>
            <td className="border px-4 py-2">133.322 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Centymetr słupa rtęci</td>
            <td className="border px-4 py-2">1333.22 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Cal</td>
            <td className="border px-4 py-2">6894.76 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Funt na cal kwadratowy</td>
            <td className="border px-4 py-2">6894.76 Pa</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Psi</td>
            <td className="border px-4 py-2">6894.76 Pa</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default UnitTypes;
