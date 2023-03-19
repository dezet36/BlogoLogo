import { useState } from "react";

export const useToggle = (
  firstvalue: boolean = false
): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(firstvalue);
  const toogle = () => setValue((prevValue) => !prevValue);
  return [value, toogle];
};
