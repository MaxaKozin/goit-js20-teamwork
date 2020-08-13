import * as apiServices from "./apiService";
import homePageMarkUp from "../views/HomePage";
import detailsPageMarkUp from '../views/MovieDetailsPage'

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
    let { id } = event.target;
    selectTab(id);
    loadHomepageContent(page);
  }
  // const loadLibraryContent = () => {
  //   const content = document.querySelector('#content');
  //   homePageMarkUp(data, content)
  // }
  window.onload = () => {
    window["home"].addEventListener('click', event => pushHomepage(event, page));
    // window["mylibrary"].addEventListener('click', event => push(event));
  }
}

export default routing;







