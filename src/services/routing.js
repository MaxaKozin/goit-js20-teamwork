import * as apiServices from "./apiService";
import homePageMarkUp from "../views/HomePage";
import MyLibrary from '../views/MyLibraryView';
import Pagination from "../components/Pagination";

const routing = (page) => {
  const selectTab = id => {
    document.querySelectorAll('.route').forEach(item => item.classList.remove('selected'));
    document.querySelectorAll('#' + id).forEach(item => item.classList.add('selected'));
  }

  const loadHomepageContent = (page = 1) => {
    const content = document.querySelector('#content');
    apiServices
      .fetchRated(page)
      .then((data) => {
        content.innerHTML = '';
        homePageMarkUp(data, content)
      })
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
    MyLibrary.init()
  }

  const pushLibrary = event => {
    let { id } = event.target;
    selectTab(id);
    loadLibraryContent();
  }

  window.onload = () => {
    window["home"].addEventListener('click', event => pushHomepage(event, page));
    window["mylibrary"].addEventListener('click', event => pushLibrary(event));
  }
}

export default routing;







