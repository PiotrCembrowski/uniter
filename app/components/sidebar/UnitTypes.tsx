import React from "react";
import FolderItem from "../FolderItem";
import { useDispatch } from "react-redux";
import { newImperialDashState, newMetricDashState } from "@/store/dashOperator";

const UnitTypes = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-2">
      <FolderItem href="#">Length units</FolderItem>
      <FolderItem href="#">Mass units</FolderItem>
      <FolderItem href="#">Sales Collateral</FolderItem>
      <FolderItem href="#">Training Materials</FolderItem>
    </div>
  );
};

export default UnitTypes;
