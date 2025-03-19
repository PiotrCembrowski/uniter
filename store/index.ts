import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { units: 0 };

const unitsSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    newState: (state) => (state = state),
  },
});

const store = configureStore({
  reducer: unitsSlice.reducer,
});

export const { newState } = unitsSlice.actions;

export default store;
