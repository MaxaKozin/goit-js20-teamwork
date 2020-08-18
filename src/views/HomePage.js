import homepage from "../templates/homepage.hbs";
import genresIds from "../services/genresIds";
import refs from "../services/refs";

const homePageMarkUp = function (data, target) {
  const newData = data.map((item) => {
    const newGenres = [];
    item.genre_ids.map((id) => {
      const found = genresIds.find((item) => item.id === id);
      newGenres.push(found.name);
    });
    item.genre_ids = [...newGenres];
    item.release_date = item.release_date.slice(0, 4);
    return item;
  });
  target.innerHTML = "";
  const markUp = homepage(newData);
  refs.buttonBox.innerHTML = "";
  refs.form.classList.remove("none");
  target.innerHTML = markUp;
};

export default homePageMarkUp;
