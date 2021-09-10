import './style.css';
import {renderScoreList, populateList} from './utils/list';
import renderForm from './utils/form';
import consumeAPI from './utils/consumeApi';
import Storage from './utils/storage';



renderScoreList();
renderForm();
populateList();

const refreshBtn = document.getElementById('refresh')
refreshBtn.addEventListener('click', () => {
 
  consumeAPI.myRequestGet().then(value => {
    let storeItem = value.result
    Storage.saveToStorage('scoreList', storeItem) 
  })
  populateList();
})

const postDataForm = document.querySelector('.addScore')
postDataForm.addEventListener('click', (e) => {
  e.preventDefault()
  let user = e.target.parentElement[0].value
  let score = e.target.parentElement[1].value
  consumeAPI.myRequestPost(user, score)
  e.target.parentElement[0].value = '';
  e.target.parentElement[1].value = '';

})



