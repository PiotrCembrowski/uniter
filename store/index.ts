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

const store = configureStore({
  reducer: unitsSlice.reducer,
});

export const { newState } = unitsSlice.actions;

export default store;
