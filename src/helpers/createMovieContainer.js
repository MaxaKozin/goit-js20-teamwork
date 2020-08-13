const createMovieContainer = () => {
  const content = document.querySelector('#content');
  const movieRef = document.createElement('div');
  movieRef.className = 'movie';
  content.append(movieRef);
}

export default createMovieContainer;

