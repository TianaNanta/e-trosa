import React, {useState} from 'react';
import Input from './components/input/input';
import StyledButton from './components/buttons/button';
import { AppBackground, CenterBox, BorderBox } from './App.styled';
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
            <Input id={'password'} type={'password'} label={'Mot de passe'} value={password} setValue={setPassword} />
          </BorderBox>
          <StyledButton text={'send'} />
            <Space size={1} />
          <StyledButton text={'reset'} onClick={handleReset}/>
            <Space size={1} />
        </CenterBox>
      </ThemeProvider>
    </>
      
  );
}

export default App;
