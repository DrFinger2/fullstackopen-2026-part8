import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import { LOGIN } from "../queries";
import { REGISTER } from "../queries";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loginMutation, loginResult] = useMutation(LOGIN);
  const [registerMutation, registerResult] = useMutation(REGISTER);
  const [token, setToken] = useState(() =>
    localStorage.getItem("library-user-token"),
  );

  const login = Object.assign(
    async (username, password) => {
      const { data } = await loginMutation({
        variables: { username: String(username), password: String(password) },
      });
      localStorage.setItem("library-user-token", data.login.value);
      setToken(data.login.value);
      return data.login;
    },
    { loading: loginResult.loading, error: loginResult.error },
  );

  const logout = Object.assign(
    async () => {
      localStorage.removeItem("library-user-token");
      setToken(null);
    },
    { loading: false, error: undefined },
  );

  const register = Object.assign(
    async (username, favoriteGenre) => {
      const { data } = await registerMutation({
        variables: {
          username: String(username),
          favoriteGenre: String(favoriteGenre),
        },
      });
      return data.createUser;
    },
    { loading: registerResult.loading, error: registerResult.error },
  );

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: Boolean(token),

        login: login,
        logout: logout,
        register: register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
