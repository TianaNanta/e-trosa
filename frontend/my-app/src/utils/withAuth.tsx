import React, { ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthService } from "../services/auth-service";

import { BoxStyled, BoxStyledChild } from './withAuth.style';

const withAuth = (WrappedComponent: any) => {
  const Auth = (props: any) => {
    const navigate = useNavigate();
    const [ isLoading , setIsLoading] = useState(true);

    useEffect(() => {
      const isLoggedIn = AuthService.isLogged();

      if (!isLoggedIn) {
        // navigate("/auth/login");
      }
      else {
        setIsLoading(false);
      }
    }, []);

    return isLoading ? 
      <BoxStyled>
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
      </BoxStyled> 
    : 
      <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
