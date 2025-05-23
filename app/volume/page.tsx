import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const VolumeDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="volume" />
      <div>
        <Dashboard dashType="volume" />
      </div>
    </div>
  );
};

export default VolumeDash;
