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
    nav = document.querySelector('.menu'),
    reference = document.querySelector('.links'),
    title = document.querySelector('.title'),
    begin = document.querySelector('.begin'),
    exit = document.querySelector('.exit'),
    rocket = document.querySelector('.rocket');
  
  button.classList.add('hide');
  banner.classList.add('hide');
  title.classList.add('hide'); 
  nav.classList.add('hide');
  reference.classList.add('hide');
  load.classList.add('see');
  setTimeout(loadOut, 5000);
  
  function loadOut() {
    load.classList.remove('see');
    begin.classList.add('show');
    exit.classList.add('show');
    
  }
};

function beginTutorial() {
  let begin = document.querySelector('.begin'),
    planet = document.querySelector('.planet'),
    outline = document.querySelector('.planet_outline');

  begin.classList.remove('show');
  planet.classList.add('show');
  outline.classList.add('show');
}

function skipTutorial() {
  let begin = document.querySelector('.begin'),
    load = document.querySelector('.load');

  begin.classList.remove('show');
  load.classList.add('see');
  setTimeout(endSkip, 1500);

  function endSkip() {
    load.classList.remove('see');
  }
};

function exitGame() {
  let quit = document.querySelector('.exiting'),
    begin = document.querySelector('.begin'),
    button = document.querySelector('.gui');

  quit.classList.toggle('show');
}

function quitGame() {
  let quit = document.querySelector('.exiting'),
    load = document.querySelector('.load'),
    button = document.querySelector('.playButton'),
    banner = document.querySelector('.banner'),
    nav = document.querySelector('.menu'),
    reference = document.querySelector('.links'),
    title = document.querySelector('.title'),
    begin = document.querySelector('.begin'),
    exit = document.querySelector('.exit'),
    rocket = document.querySelector('.rocket'),
    planet = document.querySelector('#planet'),
    outline = document.querySelector('#planet_outline');

  load.classList.add('see');
  setTimeout(defaultScreen, 1000);

  function defaultScreen() {
    quit.classList.remove('show');
    button.classList.remove('hide');
    banner.classList.remove('hide');
    nav.classList.remove('hide');
    reference.classList.remove('hide');
    title.classList.remove('hide');
    begin.classList.remove('show');
    exit.classList.remove('show');
    planet.classList.remove('show');
    outline.classList.remove('show');
  }
  setTimeout(endQuit, 4000);

  function endQuit() {
    load.classList.remove('see');
  }
}

function returnGame() {
  let quit = document.querySelector('.exiting'),
    begin = document.querySelector('.begin');

  quit.classList.remove('show');
  begin.classList.add('show');
}

navigation();