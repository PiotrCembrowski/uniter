import { connfigureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

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
  return connfigureStore({
    reducer: {
      metricDash: metricDashSlice.reducer,
      imperialDash: imperialDashSlice.reducer,
    },
  });
};
export const { newMetricDashState } = metricDashSlice.actions;
export const { newImperialDashState } = imperialDashSlice.actions;

export default store;
