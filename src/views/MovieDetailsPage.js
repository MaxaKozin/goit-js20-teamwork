import details from '../templates/details.hbs';

const detailsPageMarkUp = function (data, ref) {
  const markUp = details(data);
  const form = document.querySelector('.search-form');
  form.classList.add('none');
  ref.insertAdjacentHTML('beforeend', markUp);
};

export default detailsPageMarkUp;
