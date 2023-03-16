import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'
import { useState, useEffect } from 'react'

import LightTheme from '../core/theme/index'
import DarkTheme from '../core/theme/theme2'

interface LayoutProps {
  children: ReactNode;
}


function Layout({ children }: LayoutProps) {

  const [ isDarkMode, setIsDarkMode ] = useState<boolean>(false);

  const themeswitch = (isDarkMode ? DarkTheme : LightTheme );

  const handleThemeToogle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('isDarkmode') || 'false');
    if (currentTheme) {
      setIsDarkMode(currentTheme);
    }
  }, []);


  return (
    <ThemeProvider theme={LightTheme}>
      {children}
    </ThemeProvider>
  );
}

export default Layout;