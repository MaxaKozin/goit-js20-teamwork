import homepage from "../templates/homepage.hbs";
import refs from "../services/refs";

const MyLibrary = {
  getWatched() {
    console.log("getting watched");
    const data = JSON.parse(localStorage.getItem("watched")) || [];
    refs.content.innerHTML = "";
    this.myLibraryMarkUp(data, refs.content);
  },

  getQueue() {
    console.log("gettin queue");
    const data = JSON.parse(localStorage.getItem("queue")) || [];
    refs.content.innerHTML = "";
    this.myLibraryMarkUp(data, refs.content);
  },

  myLibraryMarkUp(data, ref) {
    const markUp = homepage(data);
    ref.insertAdjacentHTML("beforeend", markUp);
  },

  init() {
    refs.searchForm.classList.add("none");
    refs.buttonBox.innerHTML = "";

    const watchedButton = document.createElement("button");
    watchedButton.type = "button";
    watchedButton.classList.add("library__button");
    watchedButton.classList.add("library__button--active");
    watchedButton.textContent = "Watched";
    watchedButton.addEventListener("click", () => {
      queueButton.classList.remove("library__button--active");
      watchedButton.classList.add("library__button--active");
      this.getWatched();
    });

    const queueButton = document.createElement("button");
    queueButton.type = "button";
    queueButton.classList.add("library__button");
    queueButton.textContent = "Queue";
    queueButton.addEventListener("click", () => {
      watchedButton.classList.remove("library__button--active");
      queueButton.classList.add("library__button--active");
      this.getQueue();
    });

    const buttonsMarkup = [watchedButton, queueButton];
    refs.buttonBox.append(...buttonsMarkup);

    this.getWatched();
  },
};

export default MyLibrary;
