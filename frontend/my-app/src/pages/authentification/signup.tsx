import React from "react";
import { useNavigate } from "react-router-dom";

import { UserThemeContext } from "../../layout/withTheme";
import StyledButton from "../../components/buttons/button";
import {
  BackgroundLogin,
  ColumnBox,
  RowBox,
  FormDiv,
  StyledSpan,
  Divinput,
  Gridinput,
  FullWidth,
  TitleContainer,
} from "./auth.style";

import Input from "../../components/input/input";
import Space from "../../components/space/space";

export default function Signup() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = React.useState<string>("");
  const [lastname, setLastname] = React.useState<string>("");
  const [user, setUser] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const theme = React.useContext(UserThemeContext);

  let dark = theme.name === "dark-mode" ? true : false;

  return (
    <>
      <BackgroundLogin>
        <FormDiv $dark={dark}>
          <TitleContainer>
            <h2>Sign Up</h2>
          </TitleContainer>
          <Space size={0} height={5} />
          <Gridinput>
            <div>
              <StyledSpan>Firstname</StyledSpan>
              <Divinput>
                <Input
                  id="Firstname"
                  label="Firstname"
                  type="text"
                  value={firstname}
                  setValue={setFirstname}
                />
              </Divinput>
            </div>
            <div>
              <StyledSpan>Lastname</StyledSpan>
              <Divinput>
                <Input
                  id="Lastname"
                  label="Lastname"
                  type="text"
                  value={lastname}
                  setValue={setLastname}
                />
              </Divinput>
            </div>
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
              <StyledSpan>E-mail</StyledSpan>
              <Divinput>
                <Input
                  id="Email"
                  label="Email"
                  type="text"
                  value={email}
                  setValue={setEmail}
                />
              </Divinput>
            </FullWidth>
            <div>
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
            </div>
            <div>
              <StyledSpan>Confirm Password</StyledSpan>
              <Divinput>
                <Input
                  id="Confirm Password"
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                />
              </Divinput>
            </div>
          </Gridinput>
        </FormDiv>
      </BackgroundLogin>
    </>
  );
}
