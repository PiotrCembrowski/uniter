import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const PressureDash = () => {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <Dashboard dashType="pressure" />
      </div>
    </div>
  );
};

export default PressureDash;
