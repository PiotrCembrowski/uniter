import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const SurfaceDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="speed" />
      <div>
        <Dashboard dashType="speed" />
      </div>
    </div>
  );
};

export default SurfaceDash;
