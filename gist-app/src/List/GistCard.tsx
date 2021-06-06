import React from 'react';
import { Content } from '../models/gist';
import { GistCardProps } from './GistCardProps';

export const GistCard = (props: GistCardProps): JSX.Element => {

  return (
    <div>
      Gist
      {Object.keys(props.gist.files).map((key: string) => {
        return (
          <div>
            {props.gist.files[key].filename}
          </div>
        )
      })}
    </div>
  )
}