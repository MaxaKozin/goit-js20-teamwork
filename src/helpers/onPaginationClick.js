import * as apiServices from '../services/apiService';
import homePageMarkUp from '../views/HomePage';
import { startSpin, stopSpin } from '../components/Spinner/Spinner';

const onPaginationClick = (page) => {
  const movieRef = document.querySelector('.movie');
  startSpin();
  apiServices
    .fetchRated(page)
    .then((data) => {
      homePageMarkUp(data, movieRef)
    }).then(() => stopSpin())
    .catch((error) => console.log(error));
}

export default onPaginationClick;