import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

const useLogout = () => {
  const ctx = useContext(AuthContext);
  return ctx.logout;
};

export default useLogout;
