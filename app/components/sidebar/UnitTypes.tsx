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

const UnitTypes = ({ unitTable }: { unitTable: string }) => {
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
  const jsonFile = lib;
  console.log(jsonFile.pressure);

  if (unitTable !== "pressure") {
    return null; // Do not render anything if the unitTable is not "pressure"
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
