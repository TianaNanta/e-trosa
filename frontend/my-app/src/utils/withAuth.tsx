import React, { ReactNode } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthService } from "../services/auth-service";

import { BoxStyled, BoxStyledChild } from './withAuth.style';
import { Fade } from 'react-awesome-reveal';

const withAuth = (WrappedComponent: any) => {
  const Auth = (props: any) => {
    const navigate = useNavigate();
    const [ isLoading , setIsLoading] = useState(true);

    useEffect(() => {
      const isLoggedIn = AuthService.isLogged();

      if (!isLoggedIn) {
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      }
      else {
        setIsLoading(false);
      }
    }, []);

    return isLoading ? 
    <Fade>
      <BoxStyled>
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
        <BoxStyledChild />
      </BoxStyled> 
    </Fade>
    : 
      <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
