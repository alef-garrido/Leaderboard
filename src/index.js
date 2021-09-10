import './style.css';
import renderScoreList from './utils/list';
import renderForm from './utils/form';
import consumeAPI from './utils/consumeApi'

renderScoreList();
renderForm();
consumeAPI.myRequest();