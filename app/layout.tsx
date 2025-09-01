import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unit Converter",
  description: "Unit converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TooltipProvider>
          <main className="flex min-h-screen h-auto">
            <StoreProvider>{children}</StoreProvider>
          </main>
        </TooltipProvider>
      </body>
      <GoogleAnalytics gaId="G-ZLDWN9CHBL" />
    </html>
  );
}
