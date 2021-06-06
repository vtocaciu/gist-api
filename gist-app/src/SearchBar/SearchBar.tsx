import React, { ChangeEvent, MouseEvent} from 'react';
import { SearchBarProps } from './SearchBarProps';

export const SearchBar = (props: SearchBarProps) => {

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onValueChange(event.target.value);
  }

  const onClick = (event: MouseEvent) => {
    props.onClick();
  }

  return (
    <div>
      <input type="text" onChange={onValueChange} value={props.value} />
      <button onClick={onClick} style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '5px'}}>
        Search
      </button>
    </div>
  );

}