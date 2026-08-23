import { useState } from "react";
import NotificationContext from "./NotificationContext";
const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState("error");
  const [idx, setIdx] = useState(0);

  const ctx = {
    controls: {
      success: (message) => {
        setMessage(message);
        setType("success");
        setIdx(idx + 1);
      },
      error: (message) => {
        setMessage(message);
        setType("error");
        setIdx(idx + 1);
      },
    },

    value: { type, message, idx },
  };

  return (
    <NotificationContext.Provider value={ctx}>
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
