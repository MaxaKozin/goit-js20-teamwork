import * as apiServices from "./services/apiService";
import homePageMarkUp from "./views/HomePage";
import detailsPageMarkUp from './views/MovieDetailsPage'
import refs from "./services/refs";
import routing from './services/routing';
import "./style.scss";
import Pagination from "./components/Pagination";



// Запрос для Homepage
apiServices
  .fetchRated(1)
  .then((data) => homePageMarkUp(data, refs.gallery))
  .catch((error) => console.log(error));
document.querySelector('#home').classList.add('selected');
Pagination.init();
routing(1);

// Запрос для поиска фильмов по названию фильма
refs.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  apiServices
    .fetchByQuery(inputValue, 1)
    .then((data) => homePageMarkUp(data, refs.gallery))
    .catch((error) => console.log(error));
  refs.gallery.innerHTML = "";
  Pagination.clear();
  form.reset();
});

// Render одного фильма по id
refs.gallery.addEventListener('click', (event) => {
  event.preventDefault();
  const { id } = event.target.dataset;
  const movieId = Number(id.slice(0, -1));
  apiServices.fetchById(movieId).then((data) => {
    refs.gallery.innerHTML = '';
    detailsPageMarkUp(data, refs.gallery);
    document.querySelectorAll('.route').forEach(item => item.classList.remove('selected'));
  }
  )
})
