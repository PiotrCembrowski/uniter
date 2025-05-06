"use client";

import FolderItem from "../FolderItem";
import { useDispatch } from "react-redux";
import { newImperialDashState, newMetricDashState } from "@/store/dashOperator";

const UnitTypes = () => {
  const dispatch = useDispatch();

  const showHide = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = event.currentTarget.innerText;

    if (target === "Length units") {
      dispatch(newMetricDashState(true));
      dispatch(newImperialDashState(false));
    }

    if (target === "Mass units") {
      dispatch(newImperialDashState(true));
      dispatch(newMetricDashState(false));
    }
  };

  return (
    <div className="mt-2">
      <FolderItem href="#" onClick={showHide}>
        Length units
      </FolderItem>
      <FolderItem href="#" onClick={showHide}>
        Mass units
      </FolderItem>
      <FolderItem href="#" onClick={showHide}>
        Sales Collateral
      </FolderItem>
      <FolderItem href="#" onClick={showHide}>
        Training Materials
      </FolderItem>
    </div>
  );
};

export default UnitTypes;
