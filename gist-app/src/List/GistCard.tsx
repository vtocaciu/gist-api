import React from 'react';
import { Content } from '../models/gist';
import { GistCardProps } from './GistCardProps';
import "./GistStyles.css";

export const GistCard = (props: GistCardProps): JSX.Element => {
  var randomColor = require('randomcolor');

  const getColor = (type: string): string => {
    if (Object.keys(props.types).includes(type))
      return props.types[type];
    let color = randomColor({ luminosity: 'dark', hue: 'random' })
    while (Object.values(props.types).indexOf(color) > -1)
      color = randomColor({ luminosity: 'dark', hue: 'random' });
    props.types[type] = color;
    return color;
  }

  return (
    <div className="card-container">
      {Object.keys(props.gist.files).map((key: string) => {
        return (
          <div key={key} className="card">
            <p className="gist-title">{props.gist.files[key].filename}</p>
            <div style={{backgroundColor: getColor(props.gist.files[key].type)}} className="gist-type">{props.gist.files[key].type}</div>
          </div>
        )
      })}
    </div>
  )
}