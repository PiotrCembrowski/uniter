import Header from "./header/Header";
import MetricUnitDash from "./units/MetricUnitDash";
import StoreProvider from "../StoreProvider";

const Dashboard = () => {
  return (
    <StoreProvider>
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <MetricUnitDash />
        </div>
      </div>
    </StoreProvider>
  );
};

export default Dashboard;
