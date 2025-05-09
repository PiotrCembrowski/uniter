import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const initialState = { units: 0 };

interface DashState {
  showMetricDash: boolean;
  showImperialDash: boolean;
}

const initialDashState: DashState = {
  showMetricDash: true,
  showImperialDash: false,
};

const dashSlice = createSlice({
  name: "dash",
  initialDashState,
  reducers: {
    setShowMetricDash: (state, action: PayloadAction<boolean>) => {
      state.showMetricDash = action.payload;
    },
    setShowImperialDash: (state, action: PayloadAction<boolean>) => {
      state.showImperialDash = action.payload;
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

const rootReducer = {
  metricUnits: metricUnitsSlice.reducer,
  imperialUnits: imperialSlice.reducer,
  dash: dashSlice.reducer,
};

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const { newMetricState } = metricUnitsSlice.actions;
export const { newImperialState } = imperialSlice.actions;
export const { setShowMetricDash, setShowImperialDash } = dashSlice.actions;

export default store;

// Infer the type of Store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(store);
