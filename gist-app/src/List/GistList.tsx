import React from 'react';
import { GistListProps } from './ListProps';
import { Gist } from '../models/gist';
import { GistCard } from './GistCard';


export const GistList = (props: GistListProps): JSX.Element => {

  return (
    <div>
      {props.elems.map((elem: Gist) => 
      {
        return <GistCard gist={elem} />
      }
      )}
    </div>
  );
}