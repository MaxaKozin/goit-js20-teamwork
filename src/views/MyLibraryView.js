import homepage from '../templates/homepage.hbs';

const MyLibrary = {
  getWatched() {
    console.log('getting watched');
    const data = JSON.stringify(localStorage.getItem('watched')) || [];
    document.querySelector('#content').innerHTML = '';
    this.myLibraryMarkUp(data, document.querySelector('#content'))
  },

  getQueue() {
    console.log('gettin queue');
    const data = JSON.stringify(localStorage.getItem('queue')) || [];
    document.querySelector('#content').innerHTML = '';
    this.myLibraryMarkUp(data, document.querySelector('#content'))
  },

  myLibraryMarkUp(data, ref) {
    const markUp = homepage(data);
    ref.insertAdjacentHTML('beforeend', markUp);
  },

  init() {
    const form = document.querySelector('.search-form');
    // const pagination = document.querySelector('.pagination__wrapper');
    form.classList.add('none');
    // pagination.innerHTML = '';

    const buttonBox = document.querySelector('.js-buttons');
    buttonBox.innerHTML = '';

    const watchedButton = document.createElement('button');
    watchedButton.type = 'button';
    watchedButton.classList.add('library__button');
    watchedButton.classList.add('library__button--active')
    watchedButton.textContent = 'Watched';
    watchedButton.addEventListener('click', () => {
      queueButton.classList.remove('library__button--active')
      watchedButton.classList.add('library__button--active')
      this.getWatched()
    });

    const queueButton = document.createElement('button');
    queueButton.type = 'button';
    queueButton.classList.add('library__button');
    queueButton.textContent = 'Queue';
    queueButton.addEventListener('click', () => {
      watchedButton.classList.remove('library__button--active')
      queueButton.classList.add('library__button--active')
      this.getQueue()
    })

    const buttonsMarkup = [watchedButton, queueButton];
    buttonBox.append(...buttonsMarkup);

    this.getWatched();

  }
}





export default MyLibrary;