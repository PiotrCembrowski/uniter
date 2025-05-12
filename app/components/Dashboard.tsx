import Header from "./header/Header";
import LengthDash from "./units/LengthUnitDash";
import MassDash from "./units/MassUnitDash";

const Dashboard = ({ dashType }) => {
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
