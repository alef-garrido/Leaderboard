const container = document.getElementById('addScore')

const addForm = `
<h2>Add your Score</h2>
  <form action="#">
    <input type="text" placeholder="Your name">
    <input type="text" placeholder="Your score">
    <input type="button" value="Submit">
   </form>
`
const renderForm = () => {
  container.insertAdjacentHTML('beforeend', addForm)
}

export default renderForm