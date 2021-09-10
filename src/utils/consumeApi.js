import apiActions from "./fetchData.js";

const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/' 

export class consumeAPI {
  constructor () {
    this.reqId = '';
    this.reqStat = {};
    this.reqScore = {}; 
  }

  static myRequest = async () => {
  
  try {
    const gameId = await apiActions.createGame(API)
    const postData = await apiActions.sendData(`${API}games/${gameId}/scores/`, 'Alef', 99)
    const getData = await apiActions.getData(`${API}games/${gameId}/scores/`)

    this.reqId = gameId
    this.reqStat = postData
    this.reqScore = getData

    console.log(this.reqId)
    console.log(this.reqStat.result)
    console.log(this.reqScore)
  
  } catch (err) {
    console.error(err)
  }
}
}

export default consumeAPI