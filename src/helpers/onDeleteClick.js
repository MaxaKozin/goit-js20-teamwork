const onDeleteClick = () => {
  const btn = document.querySelector('.delete');
  const storage = localStorage.getItem('watched');
  btn.addEventListener('click', event => {
    console.dir(event)
    console.log(event.path[2].dataset.id);
  })
}

export default onDeleteClick;

