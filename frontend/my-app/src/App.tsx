import React, {useState} from 'react';
import Input from './components/input/input';
import StyledButton from './components/buttons/button';
import { AppBackground, CenterBox, BorderBox } from './App.styled';
import { ThemeProvider } from 'styled-components';
import theme from './core/theme/index';
import DarkTheme  from './core/theme/theme2';
import GlobalStyle from './core/theme/global';

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
        {/* <GlobalStyle /> */}
        <CenterBox>
          <BorderBox>
            <Input id={'name'} type={'text'} label={'Nom'} value={name} setValue={setName} />
            <Input id={'password'} type={'password'} label={'Mot de passe'} value={password} setValue={setPassword} />
          </BorderBox>
          <StyledButton text={'send'} color={DarkTheme.themode.color1}/>
          <StyledButton text={'reset'} onClick={handleReset}/>
        </CenterBox>
      </ThemeProvider>

      <ThemeProvider theme={DarkTheme}>
        {/* <GlobalStyle /> */}
        <CenterBox>
          <BorderBox>
            <Input id={'name'} type={'text'} label={'Nom'} value={name} setValue={setName} />
            <Input id={'password'} type={'password'} label={'Mot de passe'} value={password} setValue={setPassword} />
          </BorderBox>
          <StyledButton text={'send'} />
          <StyledButton text={'reset'} onClick={handleReset}/>
        </CenterBox>
      </ThemeProvider>
    </>
      
  );
}

export default App;
