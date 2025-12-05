let redshow = document.querySelector(".red");
let greenshow = document.querySelector(".green");
let yellowshow = document.querySelector(".yellow");
let showtimer = document.querySelector(".timer");

let red = true, green = false, yellow = false;
let container = 10;

let timer = setInterval( () => {

  if( container=== -1 && red){
    green = true;
    red = false;
    showtimer.style.borderWidth = "5px";
    showtimer.style.borderStyle = "solid";
    showtimer.style.borderColor = "rgb(28, 255, 28)";
    showtimer.style.color =  "rgb(28, 255, 28)";
    showtimer.style.boxShadow = "0px 0px 50px rgb(28, 255, 28)";
    container = 10;
  }

   else if( container=== -1 && yellow){
    red = true;
    yellow= false;
    showtimer.style.borderWidth = "5px";
    showtimer.style.borderStyle = "solid";
    showtimer.style.borderColor = "rgb(255, 28, 28)";
    showtimer.style.color =  "rgb(255, 28, 28)";
    showtimer.style.boxShadow = "0px 0px 50px rgb(255, 28, 28)";
    container = 10;
  }

   else if( container=== -1 && green){
    yellow = true;
    green = false;
    showtimer.style.borderWidth = "5px";
    showtimer.style.borderStyle = "solid";
    showtimer.style.borderColor = "rgb(255, 213, 28)";
    showtimer.style.color =  "rgb(255, 213, 28)";
    showtimer.style.boxShadow = "0px 0px 50px rgb(255, 213, 28)";
    container = 10;
  }

  if (red) {
    redshow.classList.remove("disable");
    greenshow.classList.add("disable");
    yellowshow.classList.add("disable");
  }

  if (yellow) {
    yellowshow.classList.remove("disable");
    greenshow.classList.add("disable");
    redshow.classList.add("disable");
  }

  if (green) {
    greenshow.classList.remove("disable");
    redshow.classList.add("disable");
    yellowshow.classList.add("disable");
  }
  
  if (container < 10) {
    showtimer.innerText = `0${container}`;
  } 
  else {
    showtimer.innerText = `${container}`;
  }

  container--;

},1000)


// Button controls
let stopBtn = document.querySelector(".stop-btn");
let waitBtn = document.querySelector(".wait-btn");
let startBtn = document.querySelector(".start-btn");

stopBtn.addEventListener("click", () => {
    red = true;
    green = false;
    yellow = false;
    redshow.classList.remove("disable");
    greenshow.classList.add("disable");
    yellowshow.classList.add("disable");
    showtimer.style.borderColor = "rgb(255, 28, 28)";
    showtimer.style.color = "rgb(255, 28, 28)";
    showtimer.style.boxShadow = "0px 0px 50px rgb(255, 28, 28)";
});

waitBtn.addEventListener("click", () => {
    yellow = true;
    red = false;
    green = false;
    yellowshow.classList.remove("disable");
    greenshow.classList.add("disable");
    redshow.classList.add("disable");
    showtimer.style.borderColor = "rgb(255, 213, 28)";
    showtimer.style.color = "rgb(255, 213, 28)";
    showtimer.style.boxShadow = "0px 0px 50px rgb(255, 213, 28)";
});

startBtn.addEventListener("click", () => {
    green = true;
    red = false;
    yellow = false;
    greenshow.classList.remove("disable");
    redshow.classList.add("disable");
    yellowshow.classList.add("disable");
    showtimer.style.borderColor = "rgb(28, 255, 28)";
    showtimer.style.color = "rgb(28, 255, 28)";
    showtimer.style.boxShadow = "0px 0px 50px rgb(28, 255, 28)";
});