import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

const useLogin = () => {
  const ctx = useContext(AuthContext);
  return ctx.login;
};

export default useLogin;
