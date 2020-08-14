import homepage from '../templates/homepage.hbs';
import genresIds from '../services/genresIds';

const homePageMarkUp = function (data, ref) {

  const newData = data.map((item => {
    const newGenres = []
    item.genre_ids.map(id => {
      const found = genresIds.find(item => item.id === id)
      newGenres.push(found.name)
    })
    item.genre_ids = [...newGenres];
    item.release_date = item.release_date.slice(0, 4);
    return item
  }
  ))
  ref.innerHTML = '';
  const markUp = homepage(newData);

  const buttonBox = document.querySelector('.js-buttons');
  buttonBox.innerHTML = '';
  const form = document.querySelector('.search-form');
  form.classList.remove('none');
  ref.innerHTML = markUp;
};

export default homePageMarkUp;
