import React from "react";
import { Route, Routes } from "react-router-dom";

import AuthRouter from "./pages/authentification/authRouter";
import Home from "./pages/homepage/homepage";

import WithTheme from "./layout/withTheme";
import withAuth from "./utils/withAuth";
import withLayout from "./layout/withLayout";


function App() {
  const AuthHome = withAuth(<Home />);
  const LayoutHome = withLayout(<Home />, <Home />);

  return (
    <WithTheme>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/dashboard/*" element={<LayoutHome />} />
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </WithTheme>
  );
}

export default App;
