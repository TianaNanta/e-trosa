import React, {useState} from 'react';
import Input from './components/input/input';
import StyledButton from './components/buttons/button';
import { CenterBox, BorderBox, CenterBoxButton, BorderBoxRadius } from './App.styled';
import { ThemeProvider } from 'styled-components';
import theme from './core/theme/index';
import DarkTheme  from './core/theme/theme2';
import GlobalStyle from './core/theme/global';
import Space from './components/space/space';

function App() {

  const [name , setName] = useState('');
  const [password , setPassword] = useState('');


  function handleReset() {
    setName('');
    setPassword('');
  }

  console.log(theme.themode);
  console.log(DarkTheme.themode);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CenterBox>
          <h2>I Love Me</h2>
        </CenterBox>
        <CenterBox>
            <BorderBox>
              <Input id={'name'} type={'text'} label={'Nom'} value={name} setValue={setName} />
            </BorderBox>
              <Space size={1} height={1} />
            <BorderBox>
              <Input id={'password'} type={'password'} label={'Mot de passe'} value={password} setValue={setPassword} />
            </BorderBox>
            <Space size={1} height={1} />
        </CenterBox>
        <CenterBoxButton>
          <BorderBoxRadius>
            <StyledButton text={'send'} />
          </BorderBoxRadius>
            <Space size={2} height={1} />
          <BorderBoxRadius>
            <StyledButton text={'reset'} onClick={handleReset} />
          </BorderBoxRadius>
            <Space size={1} height={1} />
        </CenterBoxButton>
      </ThemeProvider>
    </>
      
  );
}

export default App;
