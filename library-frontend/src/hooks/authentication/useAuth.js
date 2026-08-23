import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return {
    isLoggedIn: ctx.isLoggedIn,
    token: ctx.token,
    login: ctx.login,
    logout: ctx.logout,
    register: ctx.register,
  };
};

export default useAuth;
