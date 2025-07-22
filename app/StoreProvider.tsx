"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "../store/index";
import { newLengthMetricState, newLengthImperialState } from "../store/index";
import Big from "big.js";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
    storeRef.current.dispatch(newLengthMetricState(new Big(0)));
    storeRef.current.dispatch(newLengthImperialState(new Big(0)));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
