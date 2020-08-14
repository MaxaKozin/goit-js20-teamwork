import * as apiServices from '../services/apiService';
import Pagination from '../components/Pagination';
import routing from '../services/routing';
import homePageMarkUp from '../views/HomePage';
import { startSpin, stopSpin } from '../components/Spinner/Spinner';


const onLoading = () => {
  const movieRef = document.querySelector('.movie');
  startSpin();
  apiServices
    .fetchRated(1)
    .then((data) => {
      homePageMarkUp(data, movieRef)
    })
    .then(() => stopSpin())
    .catch((error) => console.log(error));
  document.querySelector('#home').classList.add('selected');
  Pagination.init();
  routing(1);
}

export default onLoading;
