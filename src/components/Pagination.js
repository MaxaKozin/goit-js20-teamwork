import pagination from 'pagination';
import onPaginationClick from '../helpers/onPaginationClick';
import * as apiServices from '../services/apiService';
import refs from '../services/refs';

const Pagination = {
  items: null,
  init() {
    apiServices.fetchRatedData().then(data => this.items = data.total_pages).then(() => {
      const paginationWrapper = document.createElement('div');
      paginationWrapper.classList.add('pagination__wrapper');
      refs.pagination.append(paginationWrapper);

      const options = {
        currentPage: 1,
        totalItems: this.items,
        itemsPerPage: 1,
        step: 2,
        onInit: loadContent,
      }

      const loadContent = (currentPage) => {
        onPaginationClick(currentPage);
      }

      const pag1 = new pagination(paginationWrapper, options);
      paginationWrapper.querySelector('.arrowLeft').innerHTML = '';
      paginationWrapper.querySelector('.arrowRight').innerHTML = '';
      pag1.onPageChanged(loadContent);

    })
  },

  clear() {
    refs.pagination.innerHTML = '';
  }
}

export default Pagination;







