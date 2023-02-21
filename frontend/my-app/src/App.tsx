import React, {useState} from 'react';
import Input from './components/input/input';
import StyledButton from './components/buttons/button';

function App() {

  const [name , setName] = useState('');
  const [password , setPassword] = useState('');

  function handleReset() {
    setName('');
    setPassword('');
  }

  return (
    <>
      <Input id={'name'} type={'text'} label={'Nom'} value={name} setValue={setName} />
      <Input id={'password'} type={'password'} label={'Mot de passe'} value={password} setValue={setPassword} />
      <StyledButton text={'send'} />
      <StyledButton text={'reset'} onClick={handleReset}/>
    </>
  );
}

export default App;
