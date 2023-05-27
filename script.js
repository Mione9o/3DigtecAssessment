function navigation() {
var toggler = document.querySelector('.nav_arrow'),
  icon = document.querySelector('.menu'),
  navbar = document.querySelector('.navigation');

function transformFormat() {
  toggler.classList.toggle('arrow_show');
  navbar.classList.toggle('show');
}
icon.addEventListener('click', transformFormat);
  }

navigation();