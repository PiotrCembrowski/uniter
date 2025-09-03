import SideBar from "../../components/sidebar/SideBar";
import Dashboard from "../../components/Dashboard";

const SurfaceDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="surface" />
      <div>
        <Dashboard dashType="surface" />
      </div>
    </div>
  );
};

export default SurfaceDash;
