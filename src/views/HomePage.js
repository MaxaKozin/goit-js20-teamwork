import homepage from '../templates/homepage.hbs';
import Pagination from '../components/Pagination';

const homePageMarkUp = function (data, ref) {
  const markUp = homepage(data);
  const buttonBox = document.querySelector('.js-buttons');
  buttonBox.innerHTML = '';
  const form = document.querySelector('.search-form');
  form.classList.remove('none');
  ref.insertAdjacentHTML('beforeend', markUp);
};

export default homePageMarkUp;
