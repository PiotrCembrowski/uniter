import PressureDash from "./units/PressureUnitDash";
import Header from "./header/Header";
import LengthDash from "./units/LengthUnitDash";
import MassDash from "./units/MassUnitDash";
import TimeUnitDash from "./units/TimeUnitDash";
import EnergyUnitDash from "./units/EnergyUnitDash";
import PowerUnitDash from "./units/PowerUnitDash";
import VolumeUnitDash from "./units/VolumeUnitDash";
import SurfaceDash from "./units/SurfaceUnitDash";
import SpeedUnitDash from "./units/SpeedUnitDash";
import CurrencyUnitDash from "./units/CurrencyUnitDash";

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

  if (dashType === "volume") {
    content = <VolumeUnitDash />;
  }

  if (dashType === "surface") {
    content = <SurfaceDash />;
  }

  if (dashType === "speed") {
    content = <SpeedUnitDash />;
  }

  if (dashType === "currency") {
    content = <CurrencyUnitDash />;
  }

  return (
    <div className="h-auto">
      <Header />
      <div className="p-6">{content}</div>
    </div>
  );
};

export default Dashboard;
