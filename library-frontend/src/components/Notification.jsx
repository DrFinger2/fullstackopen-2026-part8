import { useEffect, useState } from "react";

const Notification = ({ type, message, idx, timeout = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), timeout);
    return () => clearTimeout(timer);
  }, [idx, timeout]);

  if (!visible || !message) return null;

  return (
    <div
      style={{
        padding: "10px 15px",
        marginBottom: "10px",
        borderRadius: "5px",
        color: "white",
        backgroundColor: type === "success" ? "green" : "red",
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
