import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { units: 0 };

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

export const store = () => {
  return configureStore({
    reducer: {
      metricUnits: metricUnitsSlice.reducer,
      imperialUnits: imperialSlice.reducer,
    },
  });
};

export const { newMetricState } = metricUnitsSlice.actions;
export const { newImperialState } = imperialSlice.actions;

export default store;

// Infer the type of Store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
