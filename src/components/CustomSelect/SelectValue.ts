import { Option } from "types";

export const options: readonly Option[] = [
  { value: "publishedAt:DESC", label: "Date (Latest)" },
  { value: "publishedAt", label: "Date (Earliest)" },
  { value: "title", label: "Title (A-Z)" },
  { value: "title:DESC", label: "Title (Z-A)" },
];
