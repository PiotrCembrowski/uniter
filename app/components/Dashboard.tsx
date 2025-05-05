import Header from "./header/Header";
import MetricUnitDash from "./units/MetricUnitDash";
import StoreProvider from "../StoreProvider";
import MassUnitDash from "./units/MassUnitDash";

const Dashboard = () => {
  return (
    <StoreProvider>
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <MetricUnitDash />
          <MassUnitDash />
        </div>
      </div>
    </StoreProvider>
  );
};

export default Dashboard;
