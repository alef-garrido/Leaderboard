/* eslint-disable no-inner-declarations */

import apiActions from './fetchData';

const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export default class consumeAPI {
  constructor() {
    this.reqId = '';
    this.reqStat = '';
    this.reqScore = {};
  }

  static myRequestID = async () => {
    try {
      const gameId = await apiActions.createGame(API);
      this.reqId = gameId;
    } catch (err) {
      console.error(err);
    }
  }

  static myRequestPost = async (user, score) => {
    try {
      const postData = await apiActions.sendData(`${API}games/${this.reqId}/scores/`, user, score);
      this.reqStat = postData.result;

      function successAlert() {
        const div = document.createElement('div');
        div.className = 'alert alert-dismissible alert-success';
        div.appendChild(document.createTextNode(postData.result));
        const container = document.getElementById('add-Score');
        container.insertAdjacentElement('beforeend', div);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
      }
      successAlert();
    } catch (err) {
      console.error(err);
    }
  }

  static myRequestGet = async () => {
    try {
      const getData = await apiActions.getData(`${API}games/${this.reqId}/scores/`);
      this.reqScore = getData;
    } catch (err) {
      console.error(err);
    }

    return this.reqScore;
  }
}
