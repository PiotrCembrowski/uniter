import SideBar from "../components/sidebar/SideBar";
import Dashboard from "../components/Dashboard";

const TimeDash = () => {
  return (
    <div className="flex">
      <SideBar unitTable="time" />
      <div>
        <Dashboard dashType="time" />
      </div>
    </div>
  );
};

export default TimeDash;
