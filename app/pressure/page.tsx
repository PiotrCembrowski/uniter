import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const PressureDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="pressure" />
      <div>
        <Dashboard dashType="pressure" />
      </div>
    </div>
  );
};

export default PressureDash;
