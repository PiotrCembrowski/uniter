import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

interface DashState {
  showMetricDash: boolean;
  showImperialDash: boolean;
}

const initialState: DashState = {
  showMetricDash: true,
  showImperialDash: false,
};

const metricDashSlice = createSlice({
  name: "metricDash",
  initialState,
  reducers: {
    newMetricDashState: (state, action: PayloadAction<boolean>) => {
      return { ...state, showMetricDash: action.payload };
    },
  },
});
const imperialDashSlice = createSlice({
  name: "imperialDash",
  initialState,
  reducers: {
    newImperialDashState: (state, action: PayloadAction<boolean>) => {
      return { ...state, showImperialDash: action.payload };
    },
  },
});
export const store = () => {
  return configureStore({
    reducer: {
      metricDash: metricDashSlice.reducer,
      imperialDash: imperialDashSlice.reducer,
    },
  });
};

export const { newMetricDashState } = metricDashSlice.actions;
export const { newImperialDashState } = imperialDashSlice.actions;

export default store;

// Infer the type of Store
export type AppDashStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootDashState = ReturnType<AppDashStore["getState"]>;
export type AppDashDispatch = AppDashStore["dispatch"];

export const wrapper = createWrapper(store);
