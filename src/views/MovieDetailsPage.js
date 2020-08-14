import details from '../templates/details.hbs';
import Pagination from '../components/Pagination';
import refs from '../services/refs'

const detailsPageMarkUp = function (data, target) {
  const markUp = details(data);
  refs.searchForm.classList.add('none');
  Pagination.clear();
  target.insertAdjacentHTML('beforeend', markUp);
};

export default detailsPageMarkUp;
