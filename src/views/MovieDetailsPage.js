import details from "../templates/details.hbs";
import Pagination from "../components/Pagination";
import refs from "../services/refs";
import openedMovie from "../helpers/openedMovie";

const detailsPageMarkUp = function (data, target) {
  openedMovie.movie = data;
  const markUp = details(data);
  refs.searchForm.classList.add("none");
  Pagination.clear();
  target.insertAdjacentHTML("beforeend", markUp);
};

export default detailsPageMarkUp;
