import { useState } from "react";

const useCountState = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    () => {
      setValue(value + 1);
    },
    () => {
      setValue(value - 1);
    }
  ];
};

export default useCountState;
