import { useMutation } from "@apollo/client/react";
import { LOGIN } from "../queries";
import { REGISTER } from "../queries";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loginMutation, loginResult] = useMutation(LOGIN);
  const [registerMutation, registerResult] = useMutation(REGISTER);

  const login = async (username, password) => {
    const { data } = await loginMutation({
      variables: {
        username: String(username),
        password: String(password),
      },
    });
    return data.login;
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
        login: {
          fn: login,
          loading: loginResult.loading,
          error: loginResult.error,
        },
        register: {
          fn: register,
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
