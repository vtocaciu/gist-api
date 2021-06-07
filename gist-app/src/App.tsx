import React, { ChangeEvent } from 'react';
import './App.css';
import { FilterBar } from './FilterBar/FilterBar';
import { GistList } from './List/GistList';
import { Gist } from './models/gist';
import { SearchBar } from './SearchBar/SearchBar';
import { getAllGistByUser } from './services/services'

let types = {};
export const App = (): JSX.Element => {

  const [username, setUsername] = React.useState<string>("");
  const [gistList, setGistList] = React.useState<Gist[]>([]);
  const [originalGistList, setOriginalGistList] = React.useState<Gist[]>([]);
  const [optionList, setOptionList] = React.useState<string[]>([]);

  const onSearchButtonClicked = (): void => {
    getAllGistByUser(username).then(data => {
      setGistList(data as Gist[]);
      setOriginalGistList(data as Gist[]);
    }).catch((error) => { console.log(error) })
  }

  const onFilterChanged = (event: ChangeEvent<HTMLSelectElement>): void => {
    if (event.currentTarget.value === "None") {
      setGistList(originalGistList);
      return;
    }
    setGistList(originalGistList.filter((gist) => {
      let isValid = false;
      Object.keys(gist.files).forEach((key) => {
        if (gist.files[key].type === event.target.value) {
          isValid = true;
        }
      })
      return isValid;
    }));
  }

  React.useEffect(() => {
    let arr: string[] = [];
    originalGistList.forEach((gist) => {
      Object.keys(gist.files).forEach((key: string) => {
        if (!arr.includes(gist.files[key].type)) {
          arr.push(gist.files[key].type)
        }
      })
    })
    setOptionList(arr);
  }, [originalGistList])

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <SearchBar value={username} onValueChange={setUsername} onClick={onSearchButtonClicked} />
        <FilterBar optionList={optionList} onFilterChanged={onFilterChanged} />
      </div>
      <GistList elems={gistList} types={types} />

    </div>
  );
}
