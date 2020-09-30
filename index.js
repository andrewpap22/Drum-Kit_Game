var numberOfDrumButtons = document.querySelectorAll(".drum").length; //selecting all the buttons with the class="drum" and by .length we get the number of them

/* we now select with the DOM all the buttons and adding an eventListener of type click (there are many many other types)
 * and we pass the function as the 2nd parameter to perform some action for these buttons. Notice that we dont pass it as: handleClick(),
 * but simply as handleClick because the previus one would be a direct function call in javascript and thus the statements of the functions,
 * would take place first rather than the DOM model. Another way of passing it is, by making the function anonymus. i.e.
 * function () {alert("I got clicked");} and pass it like that as the 2nd argument.
 */

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", playSound);
}

function handleClick() {
  alert("I got clicked");
}

/*-- We'll add sounds now to the drum buttons instead of an alert: --*/

function playSound() {

  var buttonInnerHTML = this.innerHTML; //this.innerHTML returns us the innerHTML of each of our 7 drum buttons. i.e. the characters: w,a,s...

  keySound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

}

/*--- Now besides the mouse clicks, we're going to check if the specified keyboard keys are pressed, to play the correct sound. ---*/

document.addEventListener("keypress", function(event) {

  keySound(event.key);

  buttonAnimation(event.key);

});

function keySound(key) {

  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

/*--- Now we're going to create an animation so that the user knows if they pressed the right key and heard the right sound for the right image ---*/

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
