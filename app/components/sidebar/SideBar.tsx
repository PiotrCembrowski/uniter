import React from "react";
import UnitTypes from "./UnitTypes";
import { UnitKey } from "./UnitTypes";

const SideBar = ({ unitTable }: { unitTable: UnitKey }) => {
  return (
    <div className="h-auto w-1/3 border-r-2 border-[#221E40] bg-[#161426] ">
      <div className="p-4">
        <h1 className="text-xl font-bold text-[#9177F2]">Showpad</h1>
      </div>
      <nav className="space-y-1 px-2 text-[#9177F2]">
        <div className="py-3">
          <UnitTypes unitTable={unitTable} />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
