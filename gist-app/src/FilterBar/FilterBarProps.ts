import { ChangeEvent } from "react";

export interface FilterBarProps {
  optionList: string[];
  onFilterChanged: (event: ChangeEvent<HTMLSelectElement>) => void;

}