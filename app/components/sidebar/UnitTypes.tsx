"use client";

import FolderItem from "../FolderItem";
import { useDispatch } from "react-redux";
import { setShowLengthDash, setShowMassDash } from "@/store/index";

const UnitTypes = () => {
  const dispatch = useDispatch();

  const showHide = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = event.currentTarget.innerText;

    if (target === "Length units") {
      dispatch(setShowLengthDash(true));
      dispatch(setShowMassDash(false));
    }

    if (target === "Mass units") {
      dispatch(setShowLengthDash(false));
      dispatch(setShowMassDash(true));
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
