import axios from "axios";
import { BASE_URL } from "./constant/url";
import { useNavigate } from "react-router-dom";

let login = async (identity: string, password: string) => {
  const response = await axios.post(BASE_URL + "/users/login", {
    identity,
    password,
  });
  if (response.data) {
    console.log(response.data);
    // localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  // return response.data.token;
  return response.data;
};

let logout = (): void => {
  removeToken();
};

let signup = async (
  username: string,
  email: string,
  password: string,
  avatar: any
) => {
  return axios.post(BASE_URL + "/users/signup", {
    username,
    email,
    password,
    avatar,
  });
};

let isLogged = (): boolean => {
  let token = getToken();

  if (!token) {
    return false;
  } else {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    console.log(decodedToken); // Decode the token to get the expiration time
    const currentTime = Date.now() / 1000; // Convert current time to seconds

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
  }

  return true;
};

let saveToken = (token: string): void => {
  localStorage.setItem("token", token);
};

let removeToken = (): void => {
  localStorage.removeItem("token");
};

let getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const AuthService = {
  login,
  saveToken,
  logout,
  isLogged,
  signup,
};
