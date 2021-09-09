const gameEndpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' 

class apiActions {
  createGame = () => {
    const gameID = fetch(gameEndpoint, {
      method: 'Post',
      body: JSON.stringify({
        name: 'My game',
      })
    })
    return gameID.json()
  }
}