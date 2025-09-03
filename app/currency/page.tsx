import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const CurrencyDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="currency" />
      <div>
        <Dashboard dashType="currency" />
      </div>
    </div>
  );
};

export default CurrencyDash;
