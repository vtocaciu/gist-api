import React from 'react';
import { GistListProps } from './GistListProps';
import { Gist } from '../models/gist';
import { GistCard } from './GistCard';
import "./GistStyles.css";

export const GistList = (props: GistListProps): JSX.Element => {
  
  return (
    <div className="grid-container">
      {props.elems.map((elem: Gist) => 
      {
        return <GistCard gist={elem} key={elem.id} types={props.types} />
      }
      )}
    </div>
  );
}