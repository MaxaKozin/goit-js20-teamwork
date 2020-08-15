import refs from '../services/refs';
import * as apiServices from '../services/apiService';
import homePageMarkUp from '../views/HomePage';
import Pagination from '../components/Pagination';
import { startSpin, stopSpin } from '../components/Spinner/Spinner';
import clickListener from './clickListener';

const onFormSubmit = () => {
  refs.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.query.value;
    if (!inputValue) {
      refs.warning.textContent = 'EMPTY QUERY';
      return;
    }



    if (inputValue) {
      refs.warning.textContent = '';
      refs.content.innerHTML = '';
      startSpin();
      apiServices
        .fetchByQuery(inputValue, 1)
        .then((data) => homePageMarkUp(data, refs.content))
        .then(() => stopSpin()).then(() => clickListener())
        .catch((error) => console.log(error));
      Pagination.clear();
      form.reset();
    }

  });
}

export default onFormSubmit;
