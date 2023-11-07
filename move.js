let rocket = document.querySelector(".rocket");
let planet = document.querySelector(".planet");
let outline = document.querySelector(".planet_outline");
let grabButton = document.querySelector(".grabButton");
let x = 0;
let y = 0;
let direction = 0;
let planetTop = 0;
let planetLeft = 0;
let upPressed = false;
let rightPressed = false;
let downPressed = false;
let leftPressed = false;
let isGrabbed = false;

var planetStyle = window.getComputedStyle(planet);
var planetTranslate = planetStyle.getPropertyValue("transform");

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
  
  if (isGrabbed) {
  /* Update planet position to follow rocket */
    planet.style.transform = "translate3d("+x+"px,"+y+"px, 0)";
    planetTop = y;
    planetLeft = x;
    var matches = planetTranslate.match(/translate3d\(([-0-9\.]+px), ([-0-9\.]+px), ([-0-9\.]+px)\)/);
    var planetX = parseFloat(matches[0]);
    var planetY = parseFloat(matches[1]);
    console.log(planetX, planetY);
  }

  if (grabButton.textContent == "Release Planet") {
    grabButton.style.backgroundColor = "green";
  } else if (planetY + 5 > y || planetX + 5 > x) {
    grabButton.style.backgroundColor = "red";
  } else if (planetY - 5 < y || planetX - 5 < x) {
    grabButton.style.backgroundColor = "red";
  } else {
    grabButton.style.backgroundColor = "green";
  }
}

function planetGrab() {
  
  if (grabButton.style.backgroundColor == "green") {
    isGrabbed = !isGrabbed;
    planet.classList.toggle('grabbed', isGrabbed);
    if (grabButton.textContent === "Grab Planet") {
      grabButton.textContent = "Release Planet";
    } else {
      grabButton.textContent = "Grab Planet";
    }
  }

  if (grabButton.textContent === "Release Planet") {
    grabButton.style.backgroundColor = "green";
  } else {
    grabButton.style.backgroundColor = "red";
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