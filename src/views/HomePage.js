import homepage from '../templates/homepage.hbs';
import genresIds from '../services/genresIds'
import Pagination from '../components/Pagination';

const homePageMarkUp = function (data, ref) {

  const newData = data.map((item => {
    const newGenres = []
    item.genre_ids.map(id => {
      const found = genresIds.find(item => item.id === id)
      newGenres.push(found.name)
    })
    item.genre_ids = newGenres
    return item
  }
  ))

  const markUp = homepage(newData);
  const buttonBox = document.querySelector('.js-buttons');
  buttonBox.innerHTML = '';
  const form = document.querySelector('.search-form');
  form.classList.remove('none');
  ref.insertAdjacentHTML('beforeend', markUp);
};

export default homePageMarkUp;
