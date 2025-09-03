"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown, TrendingUp } from "lucide-react";

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "CHF", name: "Swiss Franc", symbol: "Fr" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
];

export function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [fromAmount, setFromAmount] = useState("100");
  const [toAmount, setToAmount] = useState("85.42");
  const [exchangeRate, setExchangeRate] = useState(0.8542);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate API call for exchange rates
  useEffect(() => {
    const fetchExchangeRate = async () => {
      setIsLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Mock exchange rate calculation
      const mockRates: Record<string, number> = {
        "USD-EUR": 0.8542,
        "EUR-USD": 1.1707,
        "USD-GBP": 0.7834,
        "GBP-USD": 1.2765,
        "USD-JPY": 149.32,
        "JPY-USD": 0.0067,
      };

      const rateKey = `${fromCurrency}-${toCurrency}`;
      const rate = mockRates[rateKey] || 1;
      setExchangeRate(rate);

      const numAmount = Number.parseFloat(fromAmount) || 0;
      setToAmount((numAmount * rate).toFixed(2));
      setIsLoading(false);
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency, fromAmount]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    const numAmount = Number.parseFloat(value) || 0;
    setToAmount((numAmount * exchangeRate).toFixed(2));
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-serif bg-transparent">
          Convert Currencies
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Get real-time exchange rates for over 100 currencies
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* From Currency Card */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              From
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{currency.code}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {currency.name}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="number"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
              placeholder="Enter amount"
              className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-lg font-medium"
            />

            <div className="text-sm text-gray-600 dark:text-gray-400">
              1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
            </div>
          </CardContent>
        </Card>

        {/* To Currency Card */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
              To
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{currency.code}</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {currency.name}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="relative">
              <Input
                type="text"
                value={isLoading ? "Converting..." : toAmount}
                readOnly
                className="bg-gray-100 dark:bg-gray-600 border-gray-200 dark:border-gray-600 text-lg font-medium text-gray-900 dark:text-white"
              />
              {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin h-4 w-4 border-2 border-cyan-600 border-t-transparent rounded-full"></div>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              1 {toCurrency} = {(1 / exchangeRate).toFixed(4)} {fromCurrency}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center">
        <Button
          onClick={handleSwapCurrencies}
          variant="outline"
          size="lg"
          className="bg-cyan-600 text-white hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700"
        >
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Swap Currencies
        </Button>
      </div>

      {/* Exchange Rate Display */}
      <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <TrendingUp className="w-5 h-5" />
            Current Exchange Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {fromAmount} {fromCurrency} = {toAmount} {toCurrency}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Rate: 1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
