import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const initialState = {
  units: 0,
};

// Length Units

const metricUnitsSlice = createSlice({
  name: "metricUnits",
  initialState,
  reducers: {
    newMetricState: (state, action: PayloadAction<number>) => {
      return { ...state, units: action.payload };
    },
  },
});

const imperialSlice = createSlice({
  name: "imperialUnits",
  initialState,
  reducers: {
    newImperialState: (state, action: PayloadAction<number>) => {
      return { ...state, units: action.payload };
    },
  },
});

// Mass Units
// The initial state for mass units is the same as length units

const massSlice = createSlice({
  name: "mass",
  initialState: {
    imperial: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
      unit5: 0,
      unit6: 0,
      unit7: 0,
      unit8: 0,
    },
    metric: {
      unit1: 0,
      unit2: 0,
      unit3: 0,
      unit4: 0,
      unit5: 0,
    },
  },
  reducers: {
    newMetricMassState: (state, action: PayloadAction<number>) => {
      return { ...state, units: action.payload };
    },
    newImperialMassState: (state, action: PayloadAction<number>) => {
      return { ...state, units: action.payload };
    },
  },
});

// pressure units
const pressureSlice = createSlice({
  name: "pressure",
  initialState: initialState,
  reducers: {
    newPressureState: (state, action: PayloadAction<number>) => {
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
    metric: 0,
    imperial: 0,
    calories: 0,
    atomic: 0,
  },
  reducers: {
    newMetricEnergyState: (state, action: PayloadAction<number>) => {
      return { ...state, metric: action.payload };
    },
    newImperialEnergyState: (state, action: PayloadAction<number>) => {
      return { ...state, imperial: action.payload };
    },
    newCaloriesEnergyState: (state, action: PayloadAction<number>) => {
      return { ...state, calories: action.payload };
    },
    newAtomicEnergyState: (state, action: PayloadAction<number>) => {
      return { ...state, atomic: action.payload };
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

export default store;

// Infer the type of Store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(store);
