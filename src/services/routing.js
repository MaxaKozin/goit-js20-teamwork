import * as apiServices from "./apiService";
import homePageMarkUp from "../views/HomePage";
import MyLibrary from "../views/MyLibraryView";
import Pagination from "../components/Pagination";
import clickListener from "../helpers/clickListener";
import { startSpin, stopSpin } from "../components/Spinner/Spinner";
import refs from "../services/refs";
import onDeleteClick from "../helpers/onDeleteClick";

const routing = (page) => {
  const selectTab = (id) => {
    refs.routes.forEach((item) => item.classList.remove("selected"));
    document
      .querySelectorAll("#" + id)
      .forEach((item) => item.classList.add("selected"));
  };

  const loadHomepageContent = (page = 1) => {
    refs.warning.textContent = "";
    refs.header.className = "home-page"; // me
    startSpin();
    apiServices
      .fetchRated(page)
      .then((data) => {
        refs.content.innerHTML = "";
        homePageMarkUp(data, refs.content);
        clickListener(refs.content);
      })
      .then(() => stopSpin())
      .catch((error) => console.log(error));
  };

  const pushHomepage = (event, page) => {
    Pagination.clear();
    let { id } = event.target;
    selectTab(id);
    loadHomepageContent(page);
    Pagination.init();
  };

  const loadLibraryContent = () => {
    Pagination.clear();
    MyLibrary.init();
    refs.header.className = "my-library";
    onDeleteClick();
    stopSpin();
  };

  const pushLibrary = (event) => {
    refs.warning.textContent = "";
    let { id } = event.target;
    startSpin();
    selectTab(id);
    loadLibraryContent();
  };

  window.onload = () => {
    window["home"].addEventListener("click", (event) =>
      pushHomepage(event, page)
    );
    window["mylibrary"].addEventListener("click", (event) =>
      pushLibrary(event)
    );
  };
};

export default routing;
