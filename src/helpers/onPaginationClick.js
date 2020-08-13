import * as apiServices from '../services/apiService';
import refs from '../services/refs';
import homePageMarkUp from '../views/HomePage';

const onPaginationClick = (page) => {
  apiServices
    .fetchRated(page)
    .then((data) => homePageMarkUp(data, refs.gallery))
    .catch((error) => console.log(error));
}

export default onPaginationClick;