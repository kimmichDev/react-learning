import React, { useContext, createContext } from "react";

type propTypes = {
  children: React.ReactNode
}

type themeTypes = {
  primary: string;
  secondary: string;
}

const theme: themeTypes = {
  primary: "pink",
  secondary: "yello",
};

type secondThemeTypes = {
  primary: string;
  secondary: string;
}

const secondTheme: secondThemeTypes = {
  primary: "pink",
  secondary: "yello",
};

export const ThemeContext = createContext(theme);
export const ThemeContextProvider = ({ children }: propTypes) => {
  return <ThemeContext.Provider value={theme}> {children}</ThemeContext.Provider >
};