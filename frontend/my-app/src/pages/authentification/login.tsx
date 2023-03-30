import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserThemeContext } from "../../layout/withTheme";
import {
  BackgroundLogin,
  ColumnBox,
  RowBox,
  FormDiv,
  StyledSpan,
  Divinput,
  Gridinput,
  FullWidth
} from "./auth.style";

import Input from "../../components/input/input";
import StyledButton from "../../components/buttons/button";
import Space from "../../components/space/space";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const theme = useContext(UserThemeContext);

  let dark = theme.name === "dark-mode" ? true : false;

  return (
    <>
      <BackgroundLogin>
        <FormDiv $dark={dark}>
          <Gridinput>
            <FullWidth>
              <StyledSpan>Username</StyledSpan>
              <Divinput>
                <Input
                  id="User"
                  label="User"
                  type="text"
                  value={user}
                  setValue={setUser}
                />
              </Divinput>
            </FullWidth>
            <FullWidth>
            <StyledSpan>Password</StyledSpan>
              <Divinput>
                <Input
                  id="Password"
                  label="Password"
                  type="password"
                  value={password}
                  setValue={setPassword}
                />
              </Divinput>
            </FullWidth>
          </Gridinput>
        </FormDiv>
      </BackgroundLogin>
    </>
  );
}
