import React from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthService } from "../services/auth-service";

const withAuth = (WrappedComponent: any) => {
  const Auth = (props: any) => {
    const navigate = useNavigate();
    const [ isloading , setIsLoading] = useState(true);

    useEffect(() => {
      const isLoggedIn = AuthService.isLogged();

      if (!isLoggedIn) {
        navigate("/login")
      }
      else {
        setIsLoading(false);
      }
    }, []);

    return isloading ? <div>Loading...</div> : <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;
