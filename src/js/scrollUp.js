// Scroll Up with progress

let calcScrollValue = () => {
  let scrollProgress = document.querySelector('#scrollUpProgress');

  let scrollProgressValue = document.getElementById('scrollUpProgress-value');
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  // console.log('scrollValue: ', scrollValue);

  if (pos > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#14a65a ${scrollValue}%, #a8b2e8 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
