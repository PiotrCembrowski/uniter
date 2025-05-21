import PressureDash from "./units/PressureUnitDash";
import Header from "./header/Header";
import LengthDash from "./units/LengthUnitDash";
import MassDash from "./units/MassUnitDash";
import TimeUnitDash from "./units/TimeUnitDash";
import EnergyUnitDash from "./units/EnergyUnitDash";
import PowerUnitDash from "./units/PowerUnitDash";

type DashboardProps = {
  dashType: string;
};

const Dashboard: React.FC<DashboardProps> = ({ dashType }) => {
  let content;

  if (dashType === "length") {
    content = <LengthDash />;
  }

  if (dashType === "mass") {
    content = <MassDash />;
  }

  if (dashType === "pressure") {
    content = <PressureDash />;
  }

  if (dashType === "time") {
    content = <TimeUnitDash />;
  }

  if (dashType === "energy") {
    content = <EnergyUnitDash />;
  }

  if (dashType === "power") {
    content = <PowerUnitDash />;
  }

  return (
    <div>
      <Header />
      <div className="p-6">{content}</div>
    </div>
  );
};

export default Dashboard;
