import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { useState, useEffect, createContext, useContext } from "react";

import Header from "../pages/header/header";
import GlobalStyle from "../core/theme/global";
import LightTheme from "../core/theme/light";
import DarkTheme from "../core/theme/dark";

interface LayoutProps {
  children: ReactNode;
}

export const UserThemeContext = createContext<any>({});

function WithTheme({ children }: LayoutProps) : JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const themeswitch = isDarkMode ? DarkTheme : LightTheme;

  const handleThemeToogle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem("isDarkMode") || "false"
    );
    if (currentTheme) {
      setIsDarkMode(currentTheme);
    }
  }, []);

  return (
    <UserThemeContext.Provider value={themeswitch}>
      <ThemeProvider theme={themeswitch}>
        <GlobalStyle />
        <Header mode={handleThemeToogle} theme={themeswitch} />
        {children}
      </ThemeProvider>
    </UserThemeContext.Provider>
  );
}

export default WithTheme;
