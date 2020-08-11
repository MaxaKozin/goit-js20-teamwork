import homepage from '../templates/homepage.hbs';


const homePageMarkUp = function (data, ref) {
  const markUp = homepage(data);
  ref.insertAdjacentHTML('beforeend', markUp);
};

export default homePageMarkUp;
