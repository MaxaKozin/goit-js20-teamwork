import refs from '../services/refs';
import * as apiServices from '../services/apiService';
import homePageMarkUp from '../views/HomePage';
import Pagination from '../components/Pagination';
import { startSpin, stopSpin } from '../components/Spinner/Spinner';

const onFormSubmit = () => {
  refs.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.query.value;
    if (!inputValue) {
      if (document.querySelector('.form__alert')) {
        document.querySelector('.form__alert').innerHTML = 'Empty Query';
        return;
      }

      const alert = document.createElement('p');
      alert.className = 'form__alert';
      alert.innerHTML = 'Empty query';
      refs.searchForm.append(alert);
      return;

    }
    if (inputValue) {
      // document.querySelector('.form__alert').innerHTML = '';
      const movie = document.querySelector('.movie');
      movie.innerHTML = '';
      startSpin();
      apiServices
        .fetchByQuery(inputValue, 1)
        .then((data) => homePageMarkUp(data, movie))
        .then(() => stopSpin())
        .catch((error) => console.log(error));
      Pagination.clear();
      form.reset();
    }

  });
}

export default onFormSubmit;
