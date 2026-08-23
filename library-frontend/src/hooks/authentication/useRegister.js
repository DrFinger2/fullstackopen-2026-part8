import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

const useRegister = () => {
  const ctx = useContext(AuthContext);
  return ctx.register;
};

export default useRegister;
