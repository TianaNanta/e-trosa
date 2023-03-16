import React from 'react';
import { Route, Routes } from "react-router-dom";

import AuthRouter from './pages/authentification/authRouter';
import WithTheme from './layout/withTheme';
import Home from './pages/homepage/homepage';

import withAuth from '../utils/withAuth';


function App() {

  return (
    <WithTheme>
      <Routes >
          <Route path="/*" element={ <Home /> } />
          <Route path="/auth/*" element={ <AuthRouter/> } />
      </Routes>
    </WithTheme>
      
  );
}

export default App;
