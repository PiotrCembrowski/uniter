"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "../store/index";
import { newState } from "../store/index";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
    storeRef.current.dispatch(newState(0));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
