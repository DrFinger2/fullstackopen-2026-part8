import { useEffect, useState } from "react";

const Notification = ({ type, message, idx = 1, timeout = 5000 }) => {
  const [visible, setVisible] = useState(true);
  const [prevIdx, setPrevIdx] = useState(idx);

  if (idx !== prevIdx) {
    setPrevIdx(idx);
    setVisible(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), timeout);
    return () => clearTimeout(timer);
  }, [idx, timeout]);

  if (!visible || !message) return null;

  const style = {
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "5px",
    color: "white",
    backgroundColor: type === "success" ? "green" : "red",
  };

  return <div style={style}>{message}</div>;
};

export default Notification;
