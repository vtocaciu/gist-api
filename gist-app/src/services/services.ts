export const getAllGistByUser = (username: string) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}/gists`)
      .then(data => {
        if (!data.ok)
          reject("404 error")
        data.json()
          .then(jsonData => resolve(jsonData))
          .catch(error => reject(error));
    }).catch(error => reject(error));
  });
 
}

export const getAllForksByGist = (gistid: string) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/gists/${gistid}/forks`)
      .then(data => {
        if (!data.ok)
          reject("404 error")
        data.json()
          .then(jsonData => resolve(jsonData))
          .catch(error => reject(error));
    }).catch(error => reject(error));
  });
 
}

export const getFileContent = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(data => {
        if (!data.ok)
          reject("404 error")
        data.text()
          .then(textData => {  resolve(textData) })
          .catch(error => reject(error));
    }).catch(error => reject(error));
  });
}