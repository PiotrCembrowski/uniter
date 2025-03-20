import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { units: 0 };

const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    newState: (state, action: PayloadAction<number>) => {
      return { ...state, units: action.payload };
    },
  },
});

export const store = () => {
  return configureStore({
    reducer: unitsSlice.reducer,
  });
};

export const { newState } = unitsSlice.actions;

export default store;

// Infer the type of Store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
