import openedMovie from "../helpers/openedMovie";

const watchedList = JSON.parse(localStorage.getItem("watched")) || [];

const queueList = JSON.parse(localStorage.getItem("queue")) || [];

function btnHandler() {
  //  переменные с ссылкой на конпки watched и queue

  const btnWatched = document.querySelector(".js-btnWatched");
  const btnQueue = document.querySelector(".js-btnQueue");

  btnWatched.addEventListener("click", checkWatchedList);
  btnQueue.addEventListener("click", checkQueueList);

  function checkWatchedList() {
    checkList(watchedList, openedMovie.movie, btnWatched, "watched");
  }

  function checkQueueList() {
    checkList(queueList, openedMovie.movie, btnQueue, "queue");
  }

  function checkList(list, movie, btn, state) {
    if (list.includes(movie)) {
      //   openedMovie.movie.watchedList = false;
      console.log(movie);
      const { id } = movie;
      list = list.filter(item => item.id !== id);


      // list.splice(watchedList.indexOf(movie), 1);
      localStorage.setItem(state, JSON.stringify(list));
      btn.classList.remove("details__btn--in-the-list");
      btn.textContent = `Add to ${state}`;
    } else {
      //   openedMovie.movie.watchedList = true;

      console.log(movie);
      list.push(movie);
      localStorage.setItem(state, JSON.stringify(list));
      btn.classList.add("details__btn--in-the-list");
      btn.textContent = `In ${state} list`;
    }
  }

  //   function btnStyle() {
  //     if (openedMovie.movie.watchedList) {
  //       btnWatched.classList.add("details__btn--in-the-list");
  //     }
  //     if (!openedMovie.movie.watchedList) {
  //       btnWatched.classList.remove("details__btn--in-the-list");
  //     }
  //   }
  //   document.addEventListener("DOMContentLoaded", btnStyle);
}

export default btnHandler;
