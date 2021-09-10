
export default class apiActions {

  static createGame = (url_api) => {
    return fetch(`${url_api}games/`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'my game one',
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    })
   .then((res) =>  res.json())
   .then((data) => data.result.split(' ')[3])
  }

  static getData = (url_api) => {
    return fetch(url_api)
    .then((res) => res.json())
    .then((data) => { return data })
  }

  static sendData = (url_api, user, score) => {
    return fetch(url_api, {
      method: 'POST',
      body: JSON.stringify({
        user: user,
        score: score
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    })
    .then((res) => res.json())
    .then((json) => { return json })
  }

}

