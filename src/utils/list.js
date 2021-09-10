import Storage from './storage';

const container = document.getElementById('scoreList');

const header = `
<div class="header">
  <h3>Recent Scores</h3>
  <button id="refresh" class="btn btn-secondary" >Refresh</button>
</div>
`;

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
  const scores = Storage.getFromStorage('scoreList');

  const displayer = document.querySelector('.scores');
  scores.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.user}: ${item.score}`;
    displayer.append(listItem);
  });
};

export { renderScoreList, populateList };