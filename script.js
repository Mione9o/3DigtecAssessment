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
    title = document.querySelector('.title'),
    begin = document.querySelector('.begin'),
    exit = document.querySelector('.exit'),
    rocket = document.querySelector('.rocket');
  
  button.classList.add('hide');
  banner.classList.add('hide');
  title.classList.add('hide'); 
  nav.classList.add('hide');
  load.classList.add('see');
  setTimeout(loadOut, 5000);
  
  function loadOut() {
    load.classList.remove('see');
    begin.classList.add('show');
    exit.classList.add('show');
    rocket.classList.add('show');
    
  }
};

function beginTutorial() {
  let begin = document.querySelector('.begin');

  begin.classList.remove('show');
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
    begin = document.querySelector('.begin');

  quit.classList.add('show');
  begin.classList.remove('show');
}

function quitGame() {
  let quit = document.querySelector('.exiting'),
    load = document.querySelector('.load'),
    button = document.querySelector('.playButton'),
    banner = document.querySelector('.banner'),
    nav = document.querySelector('.menu'),
    title = document.querySelector('.title'),
    exit = document.querySelector('.exit'),
    rocket = document.querySelector('.rocket');

  load.classList.add('see');
  setTimeout(defaultScreen, 1000);

  function defaultScreen() {
    quit.classList.remove('show');
    button.classList.remove('hide');
    banner.classList.remove('hide');
    nav.classList.remove('hide');
    title.classList.remove('hide');
    exit.classList.remove('show');
    rocket.classList.remove('show');
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

function movement() {
  document.onkeydown = detectKey;

  function detectKey(e) {
    var posLeft = document.getElementById("life").offsetLeft;
    var posTop = document.getElementById("rocket").offsetTop;

    e = e || window.event;

    if (e.keyCode == '38') {
      /* Up Arrow */
      document.getElementById("rocket").style.transform = "rotate(0deg)";
      document.getElementById("life").style.marginTop = (posTop-10)+"px";
    } else if (e.keyCode == '40') {
      /* Down Arrow */
      document.getElementById("rocket").style.transform = "rotate(180deg)";
      document.getElementById("life").style.marginTop = (posTop+10)+"px";
    } else if (e.keyCode == '37') {
      /* Left Arrow */
      document.getElementById("rocket").style.transform = "rotate(270deg)";
      document.getElementById("life").style.marginLeft = (posLeft-10)+"px";
    } else if (e.keyCode == '39') {
      /* Right Arrow */
      document.getElementById("rocket").style.transform = "rotate(90deg)";
      document.getElementById("life").style.marginLeft = (posLeft+10)+"px";
    }
  }
}

function moving() {
  let circle = document.querySelector(".rocket"),
    moveBy = 20;
  
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        circle.style.left = parseInt(circle.style.left) - moveBy + "px";
        break;
      case "ArrowRight":
        circle.style.left = parseInt(circle.style.left) + moveBy + "px";
        break;
      case "ArrowUp":
        circle.style.top = parseInt(circle.style.top) - moveBy + "px";
        break;
      case "ArrowDown":
        circle.style.top = parseInt(circle.style.top) + moveBy + "px";
        break;
    }
  });
}

navigation();
moving();