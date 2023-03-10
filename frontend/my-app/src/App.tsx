import React, {useState} from 'react';
import {Route, Routes } from "react-router-dom";
import Input from './components/input/input';
import StyledButton from './components/buttons/button';
import { CenterBox, BorderBox, CenterBoxWithMargin, BorderBoxRadius, AppBackground } from './App.styled';
import { ThemeProvider } from 'styled-components';
import theme from './core/theme/index';
import DarkTheme  from './core/theme/theme2';
import GlobalStyle from './core/theme/global';
import Space from './components/space/space';
import Header from './pages/header/header';

function App() {

  const [name , setName] = useState<string>('');
  
  const [password , setPassword] = useState<string>('');

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const themeswitch = (isDarkMode ? DarkTheme : theme);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  function handleReset() {
    setName('');
    setPassword('');
  } 

  return (
    <>
      <ThemeProvider theme={themeswitch} >
        <Header mode={handleThemeToggle}/>
        <AppBackground>
          <GlobalStyle />
          <CenterBox>
            <StyledButton text={'dark or light'} onClick={handleThemeToggle} />
          </CenterBox>
          <CenterBox>
              <BorderBox>
                <Input id={'name'} type={'text'} label={'Nom'} value={name} setValue={setName} />
              </BorderBox>
                <Space size={1} height={4} />
              <BorderBox>
                <Input id={'password'} type={'password'} label={'Mot de passe'} value={password} setValue={setPassword} />
              </BorderBox>
              <Space size={1} height={1} />
          </CenterBox>
          <CenterBoxWithMargin>
            <BorderBoxRadius>
              <StyledButton text={'send'} />
            </BorderBoxRadius>
              <Space size={2} height={1} />
            <BorderBoxRadius>
              <StyledButton text={'reset'} onClick={handleReset} />
            </BorderBoxRadius>
              <Space size={1} height={1} />
          </CenterBoxWithMargin>
        </AppBackground>
      </ThemeProvider>
    </>
      
  );
}

export default App;
