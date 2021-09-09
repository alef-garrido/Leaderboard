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
    <li>Score 1</li>
    <li>Score 2</li>
    <li>Score 3</li>
    <li>Score 4</li>
  </ul>
</div>
`;

const renderScoreList = () => {
  container.insertAdjacentHTML('afterbegin', header);
  container.insertAdjacentHTML('beforeend', listMarkup);
};

export default renderScoreList;