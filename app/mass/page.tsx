import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const MassDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="mass" />
      <div>
        <Dashboard dashType="mass" />
      </div>
    </div>
  );
};

export default MassDash;
