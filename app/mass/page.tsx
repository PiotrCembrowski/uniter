import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const MassDash = () => {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <Dashboard dashType="mass" />
      </div>
    </div>
  );
};

export default MassDash;
