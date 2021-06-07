import React, { ChangeEvent, MouseEvent} from 'react';
import { FilterBarProps } from './FilterBarProps';

export const FilterBar = (props: FilterBarProps) => {

  return (
    <select onChange={props.onFilterChanged}>
        <option value="None" >No filters</option>
        {props.optionList.map((opt) => {
          return (
            <option value={opt} key={opt} >{opt}</option>
          )
        })}
      </select>
  );

}