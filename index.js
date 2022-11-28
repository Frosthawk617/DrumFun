function handleClick(drum) {
  switch (drum) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "a":
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      audio = new Audio("sounds/snare.mp3");
      break;
    case "d":
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      audio = new Audio("sounds/tom-4.mp3");
  }
  audio.play();
  bAnimation(drum);
}

var numOfButtons = document.querySelectorAll(".drum").length;
//sets buttons across each button.
for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   var drumSet = this.innerHTML;
    handleClick(drumSet);
  });
}
// detecting keyboard
document.addEventListener("keydown", function(event) {
  var key = event.key;
  var list = ['w','a','s','d','j','k','l'];
  if ((list.includes(key))) {
    handleClick(key);
  }
  
})

function bAnimation(currentKey) {
var selectDrum = document.querySelector('.' + currentKey);
selectDrum.classList.toggle('pressed');
setTimeout(() => {selectDrum.classList.toggle('pressed');}, 100 );
}
// var button_W = document.querySelector('.w.drum');
// button_W.addEventListener("click", function () {handleClick("w");});
// var button_W = document.querySelector('.a.drum');
// button_W.addEventListener("click", function () {handleClick("a");});
// var button_W = document.querySelector('.s.drum');
// button_W.addEventListener("click", function () {handleClick("s");});
// var button_W = document.querySelector('.d.drum');
// button_W.addEventListener("click", function () {handleClick("d");});
// var button_W = document.querySelector('.j.drum');
// button_W.addEventListener("click", function () {handleClick("j");});
// var button_W = document.querySelector('.k.drum');
// button_W.addEventListener("click", function () {handleClick("k");});
// var button_W = document.querySelector('.l.drum');
// button_W.addEventListener("click", function () {handleClick("l");});
