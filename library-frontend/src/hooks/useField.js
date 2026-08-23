import { useState } from "react";

const useField = (type = "text", initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const field = { type, value, onChange: (e) => setValue(e.target.value) };
  const reset = () => setValue(initialValue);
  return { field, reset };
};

export default useField;
