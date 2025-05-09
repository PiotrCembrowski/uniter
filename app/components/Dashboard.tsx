"use client";

import Header from "./header/Header";
import MetricUnitDash from "./units/MetricUnitDash";
import MassUnitDash from "./units/MassUnitDash";
import { useAppSelector } from "@/store/hooks";

const Dashboard = () => {
  const showMetricDash = useAppSelector(
    (state) => state.metricDash?.showMetricDash
  );

  console.log("showMetricDash", showMetricDash);

  const showImperialDash = useAppSelector(
    (state) => state.imperialDash?.showImperialDash
  );

  console.log("showImperialDash", showMetricDash);

  let content;

  if (showMetricDash) {
    content = <MetricUnitDash />;
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
