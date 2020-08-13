import details from '../templates/details.hbs';
import Pagination from '../components/Pagination';

const detailsPageMarkUp = function (data, ref) {
  const markUp = details(data);
  const form = document.querySelector('.search-form');
  form.classList.add('none');
  Pagination.clear();
  ref.insertAdjacentHTML('beforeend', markUp);
};

export default detailsPageMarkUp;
