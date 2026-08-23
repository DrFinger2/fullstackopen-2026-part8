import { useContext } from "react";
import NotificationContext from "../../contex/NotificationContext";

const useNotification = () => {
  const { value, controls } = useContext(NotificationContext);
  return {
    ...value,
    success: controls.success,
    error: controls.error,
  };
};
export default useNotification;
