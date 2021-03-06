import './style.css';
import { renderScoreList, populateList } from './utils/list';
import renderForm from './utils/form';
import consumeAPI from './utils/consumeApi';
import Storage from './utils/storage';

renderScoreList();
renderForm();
populateList();

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', () => {
  consumeAPI.myRequestGet().then((value) => {
    const storeItem = value.result;
    Storage.saveToStorage('scoreList', storeItem);
  });
  populateList();
});

const postDataForm = document.querySelector('#addScore');
postDataForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = e.target[0].value;
  const score = e.target[1].value;
  consumeAPI.myRequestPost(user, score);
  e.target[0].value = '';
  e.target[1].value = '';
});
