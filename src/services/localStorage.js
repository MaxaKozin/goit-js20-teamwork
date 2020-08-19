import openedMovie from "../helpers/openedMovie";

function btnHandler() {
  const btnWatched = document.querySelector(".js-btnWatched");
  const btnQueue = document.querySelector(".js-btnQueue");

  const watchedList = JSON.parse(localStorage.getItem("watched")) || [];
  const queueList = JSON.parse(localStorage.getItem("queue")) || [];

  const { id } = openedMovie.movie;
  if (watchedList.find((item) => item.id === id)) {
    btnWatched.classList.add("details__btn--in-the-list");
    btnWatched.textContent = `In watched list`;
  }

  if (queueList.find((item) => item.id === id)) {
    btnQueue.classList.add("details__btn--in-the-list");
    btnQueue.textContent = `In queue list`;
  }

  btnWatched.addEventListener("click", checkWatchedList);
  btnQueue.addEventListener("click", checkQueueList);

  function checkWatchedList() {
    const watchedList = JSON.parse(localStorage.getItem("watched")) || [];
    checkList(watchedList, openedMovie.movie, btnWatched, "watched");
  }

  function checkQueueList() {
    const queueList = JSON.parse(localStorage.getItem("queue")) || [];
    checkList(queueList, openedMovie.movie, btnQueue, "queue");
  }

  function checkList(list, movie, btn, state) {
    const { id } = movie;
    if (list.find((item) => item.id === id)) {
      list = list.filter((item) => item.id !== id);

      localStorage.setItem(state, JSON.stringify(list));
      btn.classList.remove("details__btn--in-the-list");
      btn.textContent = `Add to ${state}`;
    } else {
      list.push(movie);
      localStorage.setItem(state, JSON.stringify(list));
      btn.classList.add("details__btn--in-the-list");
      btn.textContent = `In ${state} list`;
    }
  }
}

export default btnHandler;
