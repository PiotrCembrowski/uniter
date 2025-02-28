export default function LengthTypes(system: string) {
  if (system === "Metric System") {
    return {
      name: "Metric System",
      unit1: 1,
      unit2: 10,
      unit3: 100,
      unit4: 1000,
      unit5: 1000000,
    };
  }
  if (system === "Imperial System") {
    return {
      name: "Imperial System",
      unit1: 1,
      unit2: 12,
      unit3: 36,
      unit4: 1760,
      unit5: 63360,
    };
  }
}
