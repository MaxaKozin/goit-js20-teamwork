import details from '../templates/details.hbs';

const detailsPageMarkUp = function (data, ref) {
  const markUp = details(data);
  ref.insertAdjacentHTML('beforeend', markUp);
};

export default detailsPageMarkUp;
