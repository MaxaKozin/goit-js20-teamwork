import * as apiServices from '../services/apiService';
import Pagination from '../components/Pagination';
import routing from '../services/routing';
import homePageMarkUp from '../views/HomePage';


const onLoading = () => {
  const movieRef = document.querySelector('.movie');
  apiServices
    .fetchRated(1)
    .then((data) => homePageMarkUp(data, movieRef))
    .catch((error) => console.log(error));
  document.querySelector('#home').classList.add('selected');
  Pagination.init();
  routing(1);
}

export default onLoading;
