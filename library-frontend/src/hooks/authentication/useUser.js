import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

const useUser = () => {
  const ctx = useContext(AuthContext);
  return { isLoggedIn: ctx.isLoggedIn, token: ctx.token };
};

export default useUser;
