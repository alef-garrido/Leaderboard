const container = document.getElementById('scoreList');

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
  container.insertAdjacentHTML('afterbegin', listMarkup);
};

export default renderScoreList;