export default class apiActions {
  static createGame = (URL_API) => fetch(`${URL_API}games/`, {
    method: 'POST',
    body: JSON.stringify({
      name: 'my game one',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => data.result.split(' ')[3])

  static getData = (URL_API) => fetch(URL_API)
    .then((res) => res.json())
    .then((data) => data)

  static sendData = (URL_API, user, score) => fetch(URL_API, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((json) => json)
}
