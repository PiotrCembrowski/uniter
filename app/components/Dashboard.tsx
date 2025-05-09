"use client";

import Header from "./header/Header";
import LengthDash from "./units/LengthUnitDash";
import MassUnitDash from "./units/MassUnitDash";
import { useAppSelector } from "@/store/hooks";

const Dashboard = () => {
  const showLengthDash = useAppSelector((state) => state.dash?.showLengthDash);

  console.log("showLengthDash", showLengthDash);

  const showMassDash = useAppSelector((state) => state.dash?.showMassDash);

  console.log("showMassDash", showMassDash);

  let content;

  if (showLengthDash) {
    content = <LengthDash />;
  }
  if (showMassDash) {
    content = <MassUnitDash />;
  }

  return (
    <div className="flex-1">
      <Header />
      <div className="p-6">{content}</div>
    </div>
  );
};

export default Dashboard;
