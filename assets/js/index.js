const headerButtons = document.querySelectorAll('.headerbtn');

function scrollIt(e) {
  e.preventDefault();
  console.log(e.target)
  /*const element = document.querySelector(`section[data-key="${e.target.data-key}"]`);
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });*/
}


headerButtons.forEach(btn => btn.addEventListener('onclick', scrollIt));
