import SideBar from "../../components/sidebar/SideBar";
import Dashboard from "../../components/Dashboard";

const PowerDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="power" />
      <div>
        <Dashboard dashType="power" />
      </div>
    </div>
  );
};

export default PowerDash;
