import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./index";
import type {
  RootDashState,
  AppDashDispatch,
  AppDashStore,
} from "./dashOperator";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export const useAppDashDsipatch: () => AppDashDispatch = useDispatch;
export const useAppDashSelector: TypedUseSelectorHook<RootDashState> =
  useSelector;
export const useAppDashStore: () => AppDashStore = useStore;
