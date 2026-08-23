import { useContext } from "react";
import NotificationContext from "../../contex/NotificationContext";

const useNotification = () => {
  const ctx = useContext(NotificationContext);
  return {
    type: ctx.value.type,
    message: ctx.value.message,
    idx: ctx.value.idx,
  };
};

const useError = () => {
  const ctx = useContext(NotificationContext);
  return { error: ctx.controls.error };
};

const useSuccess = () => {
  const ctx = useContext(NotificationContext);
  return { error: ctx.controls.success };
};

export default useNotification;
