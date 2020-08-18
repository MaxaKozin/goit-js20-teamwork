import pagination from 'pagination';
import onPaginationClick from '../helpers/onPaginationClick';
import * as apiServices from '../services/apiService';
import refs from '../services/refs';

const Pagination = {
  items: null,
  init() {
    apiServices.fetchRatedData().then(data => this.items = data.total_pages).then(() => {
      const paginationWrapper = document.createElement('div');
      const htmlMarkup =
        `<a class="material-icons"">arrow_back</a>
    <span>
      <a class="pagNumber current">1</a>
        <i class="pagDots">...</i>
        <a class="pagNumber">5</a>
        <a class="pagNumber">6</a>
        <a class="pagNumber">7</a>
        <i class="pagDots">...</i>
        <a class="pagNumber">n</a>
    </span>
    <a class="material-icons">arrow_forward</a>`;
      paginationWrapper.innerHTML = htmlMarkup;
      paginationWrapper.classList.add('pagination__wrapper');
      refs.pagination.append(paginationWrapper);

      const options = {
        currentPage: 1,
        totalItems: this.items,
        itemsPerPage: 1,
        stepNum: 1,
        onInit: loadContent,
      }

      const loadContent = (currentPage) => {
        onPaginationClick(currentPage);
      }

      const pag1 = new pagination(paginationWrapper, options);
      pag1.onPageChanged(loadContent);

    })
  },

  clear() {
    refs.pagination.innerHTML = '';
  }
}

export default Pagination;






