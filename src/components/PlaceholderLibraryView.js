const placeholder = (target, lib = '') => {
  const placeholder = document.createElement('div');
  const Markup =
    `<h2 class="placeholder-watched">Please add some movies to <span class="${lib} lib">${lib}</span>!</h2>`;
  placeholder.innerHTML = Markup;
  placeholder.classList.add('placeholder__wrapper');
  target.append(placeholder);
}

export default placeholder;