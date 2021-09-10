const container = document.getElementById('addScore');

const addForm = `
<h2>Add your Score</h2>
<form id="addScore">
  <input type="text" name="user"  class="form-control" placeholder="Your name">
  <input type="text" name="score" class="form-control" placeholder="Your score">     
  <input  class="addScore btn btn-primary" type="button" value="Submit!">
</form>
`;
const renderForm = () => {
  container.insertAdjacentHTML('beforeend', addForm);
};

export default renderForm;