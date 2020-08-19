const toTopBtn = () => {
  const scrollToTopButton = document.getElementById('js-top');
  const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 0) {
      scrollToTopButton.className = "totop_btn show";
    } else {
      scrollToTopButton.className = "totop_btn hide";
    }
  };

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 15);
    }
  };

  scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
  }
}

export default toTopBtn;
