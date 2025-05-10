import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const initialState = {
  units: 0,
  showLengthDash: true,
  showMassDash: false,
};

const dashSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    setShowLengthDash: (state, action: PayloadAction<boolean>) => {
      state.showLengthDash = action.payload;
    },
    setShowMassDash: (state, action: PayloadAction<boolean>) => {
      state.showMassDash = action.payload;
    },
  },
});

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

const metricMassSlice = createSlice({
  name: "metricMass",
  initialState,
  reducers: {
    newMetricMassState: (state, action: PayloadAction<number>) => {
      return { ...state, units: action.payload };
    },
  },
});

const imperialMassSlice = createSlice({
  name: "imperialMass",
  initialState,
  reducers: {
    newImperialMassState: (state, action: PayloadAction<number>) => {
      return { ...state, units: action.payload };
    },
  },
});

const rootReducer = {
  metricUnits: metricUnitsSlice.reducer,
  imperialUnits: imperialSlice.reducer,
  metricMassSlice: metricMassSlice.reducer,
  imperialMassSlice: imperialMassSlice.reducer,
  dash: dashSlice.reducer,
};

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const { newMetricState } = metricUnitsSlice.actions;
export const { newImperialState } = imperialSlice.actions;
export const { setShowLengthDash, setShowMassDash } = dashSlice.actions;

export default store;

// Infer the type of Store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(store);
