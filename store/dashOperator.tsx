import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const initialState = { metricDash: 1, imperialDash: 0 };

const metricDashSlice = createSlice({
  name: "metricDash",
  initialState,
  reducers: {
    newMetricDashState: (state, action: PayloadAction<number>) => {
      return { ...state, metricDash: action.payload };
    },
  },
});
const imperialDashSlice = createSlice({
  name: "imperialDash",
  initialState,
  reducers: {
    newImperialDashState: (state, action: PayloadAction<number>) => {
      return { ...state, imperialDash: action.payload };
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
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(store);
