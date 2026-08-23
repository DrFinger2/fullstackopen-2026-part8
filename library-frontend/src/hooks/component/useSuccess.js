import { useContext } from "react";
import NotificationContext from "../../contex/NotificationContext";

const useSuccess = () => {
  const ctx = useContext(NotificationContext);
  return ctx.controls.success;
};

export default useSuccess;
