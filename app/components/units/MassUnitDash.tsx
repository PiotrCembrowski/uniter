import MassUnitCard from "./MassUnitCard";

const MassUnitDash = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <MassUnitCard title="Mass metric" />
      <MassUnitCard title="Mass imperial" />
      <MassUnitCard title="Sea Metric" />
      <MassUnitCard title="Astronomic Metric" />
    </div>
  );
};

export default MassUnitDash;
