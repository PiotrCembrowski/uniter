"use client";

import Header from "./header/Header";
import LengthDash from "./units/LengthUnitDash";
import MassUnitDash from "./units/MassUnitDash";
import { useAppSelector } from "@/store/hooks";

const Dashboard = () => {
  const showMetricDash = useAppSelector((state) => state.dash?.showMetricDash);

  console.log("showMetricDash", showMetricDash);

  const showImperialDash = useAppSelector(
    (state) => state.dash?.showImperialDash
  );

  console.log("showImperialDash", showMetricDash);

  let content;

  if (showMetricDash) {
    content = <LengthDash />;
  }
  if (showImperialDash) {
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
