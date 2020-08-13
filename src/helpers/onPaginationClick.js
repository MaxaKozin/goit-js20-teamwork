import * as apiServices from '../services/apiService';
import homePageMarkUp from '../views/HomePage';

const onPaginationClick = (page) => {
  const movieRef = document.querySelector('.movie');
  apiServices
    .fetchRated(page)
    .then((data) => homePageMarkUp(data, movieRef))
    .catch((error) => console.log(error));
}

export default onPaginationClick;