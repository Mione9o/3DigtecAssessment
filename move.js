let rocket = document.querySelector(".rocket");
let planet = document.querySelector(".planet");
let grabButton = document.querySelector("#grabButton");
let x = 0;
let y = 0;
let direction = 0;
let planetGrab = planet.getBoundingClientRect();
let upPressed = false;
let rightPressed = false;
let downPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = true;
  } 
  else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
  else if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Up" || e.key == "ArrowUp") {
    upPressed = false;
  }
  else if (e.key == "Down" || e.key == "ArrowDown") {
    downPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
  else if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
}

function draw() {
  if (upPressed) {
    y-=5;
    direction = 0;
  } 
  else if (downPressed) { 
    y+=5;
    direction = 180;
  }
  else if (leftPressed) {
    x-=5;
    direction = 270;
  }
  else if (rightPressed) {
    x+=5;
    direction = 90;
  }
  rocket.style.transform = "translate3d("+x+"px,"+y+"px,0) rotate("+direction+"deg)";
  requestAnimationFrame(draw);
  if ((planetGrab.left + 15) < x && (planetGrab.top - 15) > y) {
    grabButton.style.opacity = '1';
  } else if ((planetGrab.left + 15) < x && (planetGrab.top + 15) < y) {
    grabButton.style.opacity = '1';
  } else if ((planetGrab.left + 15) > x || (planetGrab.top + 15) > y) {
    grabButton.style.opacity = '0';
  } else {
    grabButton.style.opacity = '0';
  }
}

function planetHandler() {
  const onMouseMove = (e) =>{
    planet.style.left = e.pageX + 'px';
    planet.style.top = e.pageY + 'px';
  }
  document.addEventListener('mousemove', onMouseMove);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("Text");
  document.getElementById("planet").style.opacity = '1';
  event.target.appendChild(document.getElementById(data));
}

draw();