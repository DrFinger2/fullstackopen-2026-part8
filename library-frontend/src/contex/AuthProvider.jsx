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

  const login = async (username, password) => {
    const { data } = await loginMutation({
      variables: {
        username: String(username),
        password: String(password),
      },
    });
    localStorage.setItem("library-user-token", data.login.value);
    setToken(data.login.value);
    return data.login;
  };

  const logout = async () => {
    localStorage.removeItem("library-user-token");
    setToken(null);
  };

  const register = async (username, favoriteGenre) => {
    const { data } = await registerMutation({
      variables: {
        username: String(username),
        favoriteGenre: String(favoriteGenre),
      },
    });
    return data.createUser;
  };

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: Boolean(token),

        // logout has the same struct just for consistency.
        login: {
          login: login,
          loading: loginResult.loading,
          error: loginResult.error,
        },
        logout: {
          logout: logout,
          loading: false,
          error: undefined,
        },
        register: {
          login: register,
          loading: registerResult.loading,
          error: registerResult.error,
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
