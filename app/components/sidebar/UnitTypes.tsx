"use client";

import { useDispatch } from "react-redux";
import { setShowLengthDash, setShowMassDash } from "@/store/index";

const UnitTypes = () => {
  const dispatch = useDispatch();

  const showHide = (message: string) => {
    console.log(message);

    if (message === "Length units") {
      dispatch(setShowLengthDash(true));
      dispatch(setShowMassDash(false));
    }

    if (message === "Mass units") {
      dispatch(setShowLengthDash(false));
      dispatch(setShowMassDash(true));
    }
  };

  return (
    <div className="mt-2">
      <h5
        className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 ml-3 my-1"
        onClick={() => showHide("Length units")}
      >
        Length units
      </h5>
      <h5
        className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 ml-3 my-1"
        onClick={() => showHide("Mass units")}
      >
        Mass units
      </h5>
    </div>
  );
};

export default UnitTypes;
