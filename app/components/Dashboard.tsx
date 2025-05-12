import Header from "./header/Header";
import LengthDash from "./units/LengthUnitDash";
import MassDash from "./units/MassUnitDash";

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

  return (
    <div>
      <Header />
      <div className="p-6">{content}</div>
    </div>
  );
};

export default Dashboard;
