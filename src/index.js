import './style.css';
import renderScoreList from './utils/list';
import renderForm from './utils/form';
import consumeAPI from './utils/consumeApi.js'



renderScoreList();
renderForm();


const refreshBtn = document.getElementById('refresh')
refreshBtn.addEventListener('click', () => {
  console.log(consumeAPI.myRequestGet())
})

const postDataForm = document.querySelector('.addScore')
postDataForm.addEventListener('click', (e) => {
  e.preventDefault()
  let user = e.target.parentElement[0].value
  let score = e.target.parentElement[1].value
  consumeAPI.myRequestPost(user, score)
})
