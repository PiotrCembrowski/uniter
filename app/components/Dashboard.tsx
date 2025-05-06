import Header from "./header/Header";
import MetricUnitDash from "./units/MetricUnitDash";
import StoreProvider from "../StoreProvider";
import MassUnitDash from "./units/MassUnitDash";
import { useAppSelector } from "@/store/hooks";

const Dashboard = () => {
  const showMetricDash = useAppSelector(
    (state) => state.metricDash.showMetricDash
  );

  const showImperialDash = useAppSelector(
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
