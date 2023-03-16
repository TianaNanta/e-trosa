import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'
import { useState, useEffect } from 'react'

import Header from '../pages/header/header'
import GlobalStyle from '../core/theme/global'
import LightTheme from '../core/theme/index'
import DarkTheme from '../core/theme/theme2'

interface LayoutProps {
  children: ReactNode;
}


function WithTheme({ children }: LayoutProps ){
  const [ isDarkMode, setIsDarkMode ] = useState<boolean>(false);

  const themeswitch = (isDarkMode ? DarkTheme : LightTheme );

  const handleThemeToogle = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
  };

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem('isDarkMode') || 'false');
    if (currentTheme) {
      setIsDarkMode(currentTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={themeswitch}>
      <GlobalStyle />
      {/* <Header mode={handleThemeToogle}/> */}
      {children}
    </ThemeProvider>
  );
}

export default WithTheme;