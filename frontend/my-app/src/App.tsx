import React, {useState} from 'react';
import Input from './components/input/input';
import StyledButton from './components/buttons/button';
import { AppBackground, CenterBox, BorderBox } from './App.styled';

function App() {

  const [name , setName] = useState('');
  const [password , setPassword] = useState('');

  function handleReset() {
    setName('');
    setPassword('');
  }

  return (
    <AppBackground>
      <CenterBox>
        <BorderBox>
          <Input id={'name'} type={'text'} label={'Nom'} value={name} setValue={setName} />
          <Input id={'password'} type={'password'} label={'Mot de passe'} value={password} setValue={setPassword} />
        </BorderBox>
        <StyledButton text={'send'} />
        <StyledButton text={'reset'} onClick={handleReset}/>
      </CenterBox>
    </AppBackground>
  );
}

export default App;
