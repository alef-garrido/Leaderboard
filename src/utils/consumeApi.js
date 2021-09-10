import apiActions from "./fetchData.js";

const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/' 

export class consumeAPI {
  constructor () {
    this.reqId = '';
    this.reqStat = '';
    this.reqScore = {}; 
  }

  static myRequestID = async () => {
    try {
      const gameId = await apiActions.createGame(API)
      this.reqId = gameId
      console.log(this.reqId)
      
    } catch (err) {
      console.error(err)
      }
  }

  static myRequestPost = async (user, score) => {
    try {
      const postData = await apiActions.sendData(`${API}games/${this.reqId}/scores/`, user, score)
      this.reqStat = postData.result
      console.log(this.reqStat)

    } catch (err) {
      console.error(err)
    }
  }

  static myRequestGet = async () => {
    try {
      const getData = await apiActions.getData(`${API}games/${this.reqId}/scores/`)
      this.reqScore = getData
      return this.reqScore

    } catch(err) {
      console.error(err)
    }
  }

}

export default consumeAPI