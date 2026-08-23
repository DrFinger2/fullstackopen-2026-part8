import { useContext } from "react";
import NotificationContext from "../../contex/NotificationContext";

const useError = () => {
  const ctx = useContext(NotificationContext);
  return ctx.controls.error;
};

export default useError;
