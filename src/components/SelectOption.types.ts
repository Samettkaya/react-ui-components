import { ChangeEventHandler } from "react";

export interface SelectOptionProps {
  onChange?: any
  option: any;
  isMulti: boolean;
  className: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable: boolean;
  name: string;
  defaultValue?: any;
  placeholder:string;
}
