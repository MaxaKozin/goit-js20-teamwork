import * as apiServices from '../services/apiService';

const onPaginationClick = (page) => {
  apiServices
    .fetchRated(page)
    .then((data) => homePageMarkUp(data, refs.gallery))
    .catch((error) => console.log(error));
}

export default onPaginationClick;