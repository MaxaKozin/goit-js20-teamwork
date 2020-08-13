import * as apiServices from '../services/apiService';
import detailsPageMarkUp from '../views/MovieDetailsPage';

const content = document.querySelector('#content');
const clickListener = () => {
  const ref = document.querySelector('.movie');
  ref.addEventListener('click', (event) => {
    event.preventDefault();
    const { id } = event.target.dataset;
    apiServices.fetchById(Number(id)).then((data) => {
      content.innerHTML = '';
      detailsPageMarkUp(data, content);
      document.querySelectorAll('.route').forEach(item => item.classList.remove('selected'));
    }
    )
  })
}

export default clickListener;