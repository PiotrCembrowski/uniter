import SideBar from "../../components/sidebar/SideBar";
import Dashboard from "../../components/Dashboard";

const EnergyDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="energy" />
      <div>
        <Dashboard dashType="energy" />
      </div>
    </div>
  );
};

export default EnergyDash;
