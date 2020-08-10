var buttons = document.querySelectorAll(".drum");

var tom1 = new MakeSound("sounds/tom-1.mp3", 68);
var tom2 = new MakeSound("sounds/tom-2.mp3", 74);
var tom3 = new MakeSound("sounds/tom-3.mp3", 75);
var tom4 = new MakeSound("sounds/tom-4.mp3", 76);
var snare = new MakeSound("sounds/snare.mp3", 83);
var kick = new MakeSound("sounds/kick-bass.mp3", 65);
var crash = new MakeSound("sounds/crash.mp3", 87);

addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    makeSound(button.innerHTML);
    buttonAnimation(button.innerHTML);
  });
});

function MakeSound(sound, keyCode) {
  this.sound = sound;
  this.keyCode = keyCode;
  this.play = function() {
    var audio = new Audio(this.sound);
    audio.play();
  };
}

function makeSound(key) {
  switch (key) {
    case "d":
      tom1.play();
      break;
    case "j":
      tom2.play();
      break;
    case "k":
      tom3.play();
      break;
    case "l":
      tom4.play();
      break;
    case "s":
      snare.play();
      break;
    case "a":
      kick.play();
      break;
    case "w":
      crash.play();
      break;
  }
}

function buttonAnimation(key){
  console.log(key);
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}




//
// button.addEventListener("keydown", function() {
//   var nieco = button.innerHTML;
//   console.log(nieco);
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
