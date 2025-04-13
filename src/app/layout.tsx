// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "MBBS Abroad Consultancy",
  description: "Your trusted partner for MBBS admissions abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-tt-norms antialiased bg-[#fffdf9] text-[#2b2b2b] min-h-screen">
        <GoogleAnalytics measurementId="G-DPPN0CNGDX" />

        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
