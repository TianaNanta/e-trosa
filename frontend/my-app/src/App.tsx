import React from 'react';
import Input from './components/input/input';

function App() {
  return (
    <>
      <Input id={'name'} type={'text'} label={'Nom'} />
      <Input id={'password'} type={'password'} label={'Mot de passe'} />
    </>
  );
}

export default App;
