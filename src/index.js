import * as apiServices from "./services/apiService";
import homePageMarkUp from "./views/HomePage";
import refs from "./services/refs";
import onLoading from './helpers/onLoading';
import "./style.scss";
import Pagination from "./components/Pagination";
import clickListener from "./helpers/clickListener";
import onFormSubmit from "./helpers/onFormSubmit";
import createMovieContainer from "./helpers/createMovieContainer";


// Создание базового контейнера для размещения карточек фильмов
createMovieContainer();

// Запрос для Homepage
onLoading();

// Запрос для поиска фильмов по названию фильма
onFormSubmit();

// Создание слушателя на контейнер с карточками фильмов
clickListener();
