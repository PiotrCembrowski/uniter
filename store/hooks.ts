import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./index";
import type {
  RootDashState,
  AppDashDispatch,
  AppDashStore,
} from "./dashOperator";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useAppDashDispatch = useDispatch.withTypes<AppDashDispatch>();
export const useAppDashSelector = useSelector.withTypes<RootDashState>();
export const useAppDashStore = useStore.withTypes<AppDashStore>();
