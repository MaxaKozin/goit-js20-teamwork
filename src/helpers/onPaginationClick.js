import * as apiServices from '../services/apiService';
import homePageMarkUp from '../views/HomePage';
import { startSpin, stopSpin } from '../components/Spinner/Spinner';
import refs from '../services/refs';
import clickListener from './clickListener';

const onPaginationClick = (page) => {
  refs.warning.textContent = '';
  startSpin();
  apiServices
    .fetchRated(page)
    .then((data) => {
      homePageMarkUp(data, refs.content);
    }).then(() => clickListener()).then(() => stopSpin())
    .catch((error) => console.log(error));
}

export default onPaginationClick;