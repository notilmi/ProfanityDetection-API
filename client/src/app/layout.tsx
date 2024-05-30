import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/contexts/ContextProvider";
import { CssBaseline } from "@mui/material";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profanity Detection API",
  description: "AI Powered Profanity Filter 🤖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../icon.svg" />
      </head>
      <body className={gabarito.className}>
        <ContextProvider>
          <CssBaseline />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
