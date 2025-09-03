"use client";

import { useEffect, useState } from "react";
import CurrencyUnitCard, { Values } from "./CurrencyUnitCard";
import { useAppSelector } from "@/store/hooks";
import Big from "big.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch } from "react-redux";
import { newDigitsState } from "@/store";

const CurrencyUnitDash = () => {
  const showMetricState = useAppSelector((state) => state.energySlice.metric);
  const showImperialState = useAppSelector(
    (state) => state.energySlice.imperial
  );

  const showDigit = useAppSelector((state) => state.digitSlice.digits);

  const metricValue = Big(showMetricState.unit).toNumber();
  const imperialValue = Big(showImperialState.unit).toNumber();

  const [metricStateValues, setMetricStateValues] = useState<Values>();
  const [imeprialValues, setImperialValues] = useState<Values>();
  const [digit, setDigit] = useState<number>(4);

  const dispatch = useDispatch();

  useEffect(() => {
    setDigit(showDigit);

    setMetricStateValues({
      unit1: metricValue,
      unit2: metricValue / 1000,
      unit3: metricValue / 9.80665,
      unit4: metricValue / 1000000,
      unit5: metricValue / 3600,
      unit6: metricValue / 3600000,
      unit7: metricValue / 1e-7,
    });

    setImperialValues({
      unit1: imperialValue / 0.0421401,
      unit2: imperialValue / 0.112985,
      unit3: imperialValue / 1.35582,
      unit4: imperialValue / 2684519.54,
      unit5: imperialValue / 1055.06,
    });
  }, [metricValue, imperialValue, showDigit]);

  const digitHandler = (value: string) => {
    console.log("Selected digit:", value, digit);
    if (value === "infinite") {
      setDigit(100);
      dispatch(newDigitsState(100));
      return;
    }
    setDigit(Number(value));
    dispatch(newDigitsState(Number(value)));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Currency Converter
          </h1>
          <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-6">
        <CurrencyConverter />
      </main>

      <footer className="bg-sidebar border-t border-sidebar-border py-6 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center text-sidebar-foreground">
          <p className="text-sm">
            Real-time exchange rates •{" "}
            <a href="#" className="text-sidebar-primary hover:underline">
              FAQ
            </a>{" "}
            •{" "}
            <a href="#" className="text-sidebar-primary hover:underline">
              Support
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CurrencyUnitDash;
