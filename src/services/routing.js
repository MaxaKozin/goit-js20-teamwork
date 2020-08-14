import * as apiServices from "./apiService";
import homePageMarkUp from "../views/HomePage";
import MyLibrary from '../views/MyLibraryView';
import Pagination from "../components/Pagination";
import clickListener from "../helpers/clickListener";
import { startSpin, stopSpin } from '../components/Spinner/Spinner';

const routing = (page) => {
  const selectTab = id => {
    document.querySelectorAll('.route').forEach(item => item.classList.remove('selected'));
    document.querySelectorAll('#' + id).forEach(item => item.classList.add('selected'));
  }

  const loadHomepageContent = (page = 1) => {
    if (document.querySelector('.form__alert')) {
      document.querySelector('.form__alert').innerHTML = '';
    }
    startSpin();
    apiServices
      .fetchRated(page)
      .then((data) => {
        const content = document.querySelector('#content');
        content.innerHTML = '';
        const movieRef = document.createElement('div');
        movieRef.className = 'movie';
        content.append(movieRef);
        homePageMarkUp(data, movieRef);
        clickListener(movieRef);
      })
      .then(() => stopSpin())
      .catch((error) => console.log(error));
  }

  const pushHomepage = (event, page) => {
    Pagination.clear();
    let { id } = event.target;
    selectTab(id);
    loadHomepageContent(page);
    Pagination.init();
  }

  const loadLibraryContent = () => {
    Pagination.clear();
    MyLibrary.init();
    stopSpin();
  }

  const pushLibrary = event => {
    let { id } = event.target;
    startSpin();
    selectTab(id);
    loadLibraryContent();
  }

  window.onload = () => {
    window["home"].addEventListener('click', event => pushHomepage(event, page));
    window["mylibrary"].addEventListener('click', event => pushLibrary(event));
  }
}

export default routing;







