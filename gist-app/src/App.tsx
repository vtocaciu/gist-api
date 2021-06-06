import React from 'react';
import './App.css';
import { GistList } from './List/GistList';
import { Gist } from './models/gist';
import { SearchBar } from './SearchBar/SearchBar';
import { getAllGistByUser } from './services/services'

let types = {};
export const App = (): JSX.Element => {
  
  const [username, setUsername] = React.useState<string>("");
  const [gistList, setGistList] = React.useState<Gist[]>([]);

  React.useEffect(() => {
    console.log("g", gistList)
  }, [gistList])

  React.useEffect(() => {
    console.log(types);
  }, [types])

  const onSearchButtonClicked = (): void => {
    getAllGistByUser(username).then(data => setGistList(data as Gist[])).catch((error)=>{console.log(error)})
  }

  return (
    <div>
      <SearchBar value={username} onValueChange={setUsername} onClick={onSearchButtonClicked} />
      <GistList elems={gistList} types={types} />
    </div>
  );
}
