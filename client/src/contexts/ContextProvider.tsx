"use client";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "@/utils/Theme";
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>;
};

export default ContextProvider;
