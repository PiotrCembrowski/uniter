import Header from "./header/Header";
import MetricUnitDash from "./units/MetricUnitDash";
import StoreProvider from "../StoreProvider";
import MassUnitDash from "./units/MassUnitDash";
import { useAppDashSelector } from "@/store/hooks";

const Dashboard = () => {
  const showMetricDash = useAppDashSelector(
    (state) => state.metricDash.showMetricDash
  );

  const showImperialDash = useAppDashSelector(
    (state) => state.imperialDash.showImperialDash
  );

  let content;

  if (showMetricDash) {
    content = <MetricUnitDash />;
  }
  if (showImperialDash) {
    content = <MassUnitDash />;
  }

  return (
    <StoreProvider>
      <div className="flex-1">
        <Header />
        <div className="p-6">{content}</div>
      </div>
    </StoreProvider>
  );
};

export default Dashboard;
