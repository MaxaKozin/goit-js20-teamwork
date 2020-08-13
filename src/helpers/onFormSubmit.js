import refs from '../services/refs';
import * as apiServices from '../services/apiService';
import homePageMarkUp from '../views/HomePage';
import Pagination from '../components/Pagination';

const onFormSubmit = () => {
  refs.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.elements.query.value;
    apiServices
      .fetchByQuery(inputValue, 1)
      .then((data) => homePageMarkUp(data, refs.movie))
      .catch((error) => console.log(error));
    refs.gallery.innerHTML = "";
    Pagination.clear();
    form.reset();
  });
}

export default onFormSubmit;
