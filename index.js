var numberOfDrumButtons = document.querySelectorAll(".drum").length; //this is an array because of the all part of the query selector.

//this for loop adds an event listener to all the buttons on the basis of their positions in the Array, i.e keeps adding the event listener till it reaches the last member of the array  before i.e while 1 < length of array, (because counting starts from 0 not 1)
for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonText = this.textContent;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
}

// This adds an event listener to the whole document for Keys that literally went down. The event input allows the computer to record the event that it listened to (I'm guessing).
// The event has property, one of which is "key" in this case, so this key property helps us know specifically which key was clicked and triggered the function.
document.addEventListener("keydown", function (event) {
  //Mad, the event that trigerred the function is actually taken as an input for the callback function, so, technically, the eventlistener just sources for events and puts the answer inside the callback function...in this case that we put the event as an input.
  //THIS IS NOT ALWAYS THE CASE AS SHOWN BY THE FIRST FUNCTION ABOVE.
  // So what i did here is make a variable for the property "key" for the whichever event triggered  the function.

  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();

      break;
    case "s":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();

      break;
    case "d":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();

      break;
    case "j":
      var snare = new Audio("snare.mp3");
      snare.play();

      break;
    case "k":
      var crash = new Audio("crash.mp3");
      crash.play();

      break;
    case "l":
      var kick = new Audio("kick-bass.mp3");
      kick.play();

      break;
    //This default is the final else statement,just incase the button text isnt any of them.
    default:
      console.log(buttonText);
      break;
  }
}

// this function is to create the animation effect
function buttonAnimation(currentKey) {
  //   since we know that the currentKey i.e clicked key / clicked button are the things that change
  //   we use it as the input for buttonAnimation fxn.

  // to get the class as the button is clicked we use the clicked key by event.key / clicked button by buttonText to get the text,
  // then concatenate it to a . to make a class as we know the correspnding inner text is same as that of the class.

  var activeButton = document.querySelector("." + currentKey);

  // After we get the specific button by query selectin the class by the above method,we add a class pressed that makes it opaque. This acts as the button is clicked or key is typed.
  activeButton.classList.add("pressed");

  //   But, since we need the darkening effect to dissapear as soon as possible,
  //  we do this by removing the class we added using a time out method specifying the time to wait before it acts (in this case the action is to remove the class formerly added and restore the button to its state before being clicked)
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
