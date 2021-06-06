import React from 'react';
import { Content } from '../models/gist';
import { getAllForksByGist } from '../services/services';
import { GistCardProps } from './GistCardProps';
import "./GistStyles.css";

export const GistCard = (props: GistCardProps): JSX.Element => {
  var randomColor = require('randomcolor');
  const [forks, setForks] = React.useState<any[]>([])
  const getColor = (type: string): string => {
    if (Object.keys(props.types).includes(type))
      return props.types[type];
    let color = randomColor({ luminosity: 'dark', hue: 'random' })
    while (Object.values(props.types).indexOf(color) > -1)
      color = randomColor({ luminosity: 'dark', hue: 'random' });
    props.types[type] = color;
    return color;
  }

  React.useEffect(() => {
    getAllForksByGist(props.gist.id).then((data) => {
      setForks((data as any[]).slice(0, 3))
    })
  }, [props.gist])

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
      {forks.length !== 0 && <div>Forked by</div>}
      {forks.map((fork) => {
        return(
          <img src={fork.owner.avatar_url} title={fork.owner.login} className="gist-fork-icon" key={fork.owner.login}/>
        )
      })}
    </div>
  )
}