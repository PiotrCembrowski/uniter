import Header from "./header/Header";
import UnitDash from "./units/UnitDash";
import StoreProvider from "../StoreProvider";

const Dashboard = () => {
  return (
    <StoreProvider>
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <UnitDash />
        </div>
      </div>
    </StoreProvider>
  );
};

export default Dashboard;
