import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import Big from "big.js";

interface MassUnit {
  unit: string;
}

interface MassState {
  metric: MassUnit;
  imperial: MassUnit;
  atomic: MassUnit;
  other: MassUnit;
}

const initialState: MassState = {
  metric: { unit: "0" },
  imperial: { unit: "0" },
  atomic: { unit: "0" },
  other: { unit: "0" },
};

// Length Units

const metricUnitsSlice = createSlice({
  name: "metricUnits",
  initialState,
  reducers: {
    newMetricState: (state, action: PayloadAction<Big>) => {
      return { ...state, units: action.payload };
    },
  },
});

const imperialSlice = createSlice({
  name: "imperialUnits",
  initialState,
  reducers: {
    newImperialState: (state, action: PayloadAction<Big>) => {
      return { ...state, units: action.payload };
    },
  },
});

// Mass Units
// The initial state for mass units is the same as length units

const massSlice = createSlice({
  name: "mass",
  initialState,
  reducers: {
    newMetricMassState: (state, action: PayloadAction<MassUnit>) => {
      return { ...state, metric: action.payload };
    },
    newImperialMassState: (state, action: PayloadAction<MassUnit>) => {
      return { ...state, imperial: action.payload };
    },
    newAtomicMassState: (state, action: PayloadAction<MassUnit>) => {
      return { ...state, atomic: action.payload };
    },
    newOtherMassState: (state, action: PayloadAction<MassUnit>) => {
      return { ...state, other: action.payload };
    },
  },
});

// pressure units
const pressureSlice = createSlice({
  name: "pressure",
  initialState: initialState,
  reducers: {
    newPressureState: (state, action: PayloadAction<Big>) => {
      return { ...state, units: action.payload };
    },
  },
});

// time units
const timeSlice = createSlice({
  name: "time",
  initialState: {
    day: 0,
    overDay: 0,
  },
  reducers: {
    newDayState: (state, action: PayloadAction<number>) => {
      return { ...state, day: action.payload };
    },
    newOverDayState: (state, action: PayloadAction<number>) => {
      return { ...state, overDay: action.payload };
    },
  },
});

// energy units
const energySlice = createSlice({
  name: "energy",
  initialState: {
    metric: {},
    imperial: {},
    calories: {},
    atomic: {},
  },
  reducers: {
    newMetricEnergyState: (state, action: PayloadAction<Big>) => {
      return { ...state, metric: action.payload };
    },
    newImperialEnergyState: (state, action: PayloadAction<Big>) => {
      return { ...state, imperial: action.payload };
    },
    newCaloriesEnergyState: (state, action: PayloadAction<Big>) => {
      return { ...state, calories: action.payload };
    },
    newAtomicEnergyState: (state, action: PayloadAction<Big>) => {
      return { ...state, atomic: action.payload };
    },
  },
});

// power units
const powerSlice = createSlice({
  name: "power",
  initialState: initialState,
  reducers: {
    newPowerState: (state, action: PayloadAction<Big>) => {
      return { ...state, units: action.payload };
    },
  },
});

// volume units
const volumeSlice = createSlice({
  name: "volume",
  initialState: {
    metric: {
      units: 0,
    },
    imperial: {
      units: 0,
    },
    american: {
      units: 0,
    },
    kitchen: {
      units: 0,
    },
  },
  reducers: {
    newMetricVolumeState: (state, action: PayloadAction<number>) => {
      return { ...state, metric: { units: action.payload } };
    },
    newImperialVolumeState: (state, action: PayloadAction<number>) => {
      return { ...state, imperial: { units: action.payload } };
    },
    newAmericanVolumeState: (state, action: PayloadAction<number>) => {
      return { ...state, american: { units: action.payload } };
    },
    newKitchenVolumeState: (state, action: PayloadAction<number>) => {
      return { ...state, kitchen: { units: action.payload } };
    },
  },
});

// Surface Units
const surfaceSlice = createSlice({
  name: "surface",
  initialState: {
    metric: {
      units: 0,
    },
    imperial: {
      units: 0,
    },
  },
  reducers: {
    newMetricSurfaceState: (state, action: PayloadAction<number>) => {
      return { ...state, metric: { units: action.payload } };
    },
    newImperialSurfaceState: (state, action: PayloadAction<number>) => {
      return { ...state, imperial: { units: action.payload } };
    },
  },
});

const rootReducer = {
  metricUnits: metricUnitsSlice.reducer,
  imperialUnits: imperialSlice.reducer,
  massSlice: massSlice.reducer,
  pressureSlice: pressureSlice.reducer,
  timeSlice: timeSlice.reducer,
  energySlice: energySlice.reducer,
  powerSlice: powerSlice.reducer,
  volumeSlice: volumeSlice.reducer,
  surfaceSlice: surfaceSlice.reducer,
};

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const { newMetricState } = metricUnitsSlice.actions;
export const { newImperialState } = imperialSlice.actions;
export const { newPressureState } = pressureSlice.actions;
export const { newDayState, newOverDayState } = timeSlice.actions;
export const {
  newMetricEnergyState,
  newImperialEnergyState,
  newCaloriesEnergyState,
  newAtomicEnergyState,
} = energySlice.actions;
export const { newPowerState } = powerSlice.actions;
export const {
  newMetricVolumeState,
  newImperialVolumeState,
  newAmericanVolumeState,
  newKitchenVolumeState,
} = volumeSlice.actions;
export const { newMetricSurfaceState, newImperialSurfaceState } =
  surfaceSlice.actions;

export const {
  newMetricMassState,
  newImperialMassState,
  newAtomicMassState,
  newOtherMassState,
} = massSlice.actions;

export default store;

// Infer the type of Store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(store);
