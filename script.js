function navigation() {
var toggler = document.querySelector('.nav_arrow'),
  icon = document.querySelector('.menu'),
  navbar = document.querySelector('.navigation');

function transformFormat() {
  toggler.classList.toggle('arrow_show');
  navbar.classList.toggle('show');
}
icon.addEventListener('click', transformFormat);
  };

function loadIn() {

  let load = document.querySelector('.load'),
    button = document.querySelector('.playButton'),
    banner = document.querySelector('.banner'),
    title = document.querySelector('.title');
  
  button.classList.add('hide');
  banner.classList.add('hide');
  title.classList.add('hide'); 
  load.classList.add('show');
  setTimeout(loadOut, 5000);
  
  function loadOut() {
    load.classList.remove('show');
  }
};

navigation();