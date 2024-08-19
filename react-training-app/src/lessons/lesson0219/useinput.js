import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bindToInput = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, reset, bindToInput];
}

export default useInput;
