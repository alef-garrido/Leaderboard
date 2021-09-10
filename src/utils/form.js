const container = document.getElementById('addScore');

const addForm = `
<h2>Add your Score</h2>
  <form id="addScore">
    <input type="text" name="user" placeholder="Your name">
    <input type="text" name="score" placeholder="Your score">
    <input  class="addScore" type="button" value="submit">
   </form>
`;
const renderForm = () => {
  container.insertAdjacentHTML('beforeend', addForm);
};

export default renderForm;