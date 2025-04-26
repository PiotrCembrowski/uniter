"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "../store/index";
import { newMetricState, newImperialState } from "../store/index";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
    storeRef.current.dispatch(newMetricState(0));
    storeRef.current.dispatch(newImperialState(0));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
