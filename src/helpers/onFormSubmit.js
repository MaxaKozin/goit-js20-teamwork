import refs from '../services/refs';
import * as apiServices from '../services/apiService';
import homePageMarkUp from '../views/HomePage';
import Pagination from '../components/Pagination';

const onFormSubmit = () => {
  const movieRef = document.querySelector('.movie');
  refs.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.query.value;
    apiServices
      .fetchByQuery(inputValue, 1)
      .then((data) => homePageMarkUp(data, movieRef))
      .catch((error) => console.log(error));
    movieRef.innerHTML = "";
    Pagination.clear();
    form.reset();
  });
}

export default onFormSubmit;
