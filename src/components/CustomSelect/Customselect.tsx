import { options } from "./SelectValue";
import Select, { SingleValue } from "react-select";
import { Option } from "types";
import { selectStyles } from "./styled";

interface SelectProps {
  handleSelect: (option: SingleValue<Option | null | any>) => void;
}

export const CustomSelect = ({ handleSelect }: SelectProps) => {
  return (
    <Select
      options={options}
      onChange={handleSelect}
      styles={selectStyles}
      defaultValue={options[0]}
      isMulti={false}
      isSearchable={false}
    />
  );
};
