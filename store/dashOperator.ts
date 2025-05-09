import {
  combineReducers,
  configureStore,
  PayloadAction,
} from "@reduxjs/toolkit";
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

const dashSlice = createSlice({
  name: "dash",
  initialState,
  reducers: {
    setShowMetricDash: (state, action: PayloadAction<boolean>) => {
      state.showMetricDash = action.payload;
    },
    setShowImperialDash: (state, action: PayloadAction<boolean>) => {
      state.showImperialDash = action.payload;
    },
  },
});

const rootReducer = combineReducers({
  dash: dashSlice.reducer,
});

export const store = () => {
  return configureStore({
    reducer: {
      dash: rootReducer,
    },
  });
};

export const { setShowMetricDash, setShowImperialDash } = dashSlice.actions;

export default store;

// Infer the type of Store
export type AppDashStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootDashState = ReturnType<AppDashStore["getState"]>;
export type AppDashDispatch = AppDashStore["dispatch"];

export const wrapper = createWrapper(store);
