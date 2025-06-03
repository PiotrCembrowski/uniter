import React from "react";
import NavItem from "./NavItem";
import { LayoutGrid } from "lucide-react";
import UnitTypes from "./UnitTypes";

const SideBar = ({ unitTable }: { unitTable: string }) => {
  return (
    <div className="h-auto w-1/3 border-r-2 border-[#221E40] bg-[#161426] ">
      <div className="p-4">
        <h1 className="text-xl font-bold text-[#9177F2]">Showpad</h1>
      </div>
      <nav className="space-y-1 px-2 text-[#9177F2]">
        <NavItem href="#" icon={<LayoutGrid className="h-4 w-4" />} active>
          All content
        </NavItem>
        <NavItem
          href="#"
          icon={
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M15 3v18M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          }
        >
          Presentations
        </NavItem>
        <NavItem
          href="#"
          icon={
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5h6m-3 4v6m-3-3h6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          Analytics
        </NavItem>
        <div className="py-3">
          <div className="px-3 text-xs font-medium uppercase text-gray-500">
            Collections
          </div>
          <UnitTypes unitTable={unitTable} />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
