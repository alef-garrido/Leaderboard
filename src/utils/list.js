import Storage from './storage';

const container = document.getElementById('scoreList');


const header = `
<div class="header">
  <h2>Recent Scores</h2>
  <button id="refresh" >Refresh</button>
</div>
`

const listMarkup = `
<div class="score-list">
  <ul class="scores">
  </ul>
</div>
`;


const renderScoreList = () => {
  container.insertAdjacentHTML('afterbegin', header);
  container.insertAdjacentHTML('beforeend', listMarkup);
};

const populateList = () => {
  let scores = Storage.getFromStorage('scoreList')

  const displayer = document.querySelector('.scores')
   scores.forEach((item, index) => {
     const listItem  = document.createElement('li')
     listItem.innerHTML = `${item.user}: ${item.score}`
     displayer.append(listItem)
   })
}

export { renderScoreList, populateList };