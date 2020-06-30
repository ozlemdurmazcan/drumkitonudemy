// ===== Function for playing the sounds =====
// ===document.addEvenltListener("click", function(variable)) --- for catching the correct key
// ===document.addEvenltListener("click", nameOfTheFunction) --- for any key


//   ====== Detect the button / click and call the function for playing the sounds =======
var drumArray = document.querySelectorAll(".drum");
for (let i = 0; i < drumArray.length; i++) {
    let whichDrum = drumArray[i];
    whichDrum.addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonPressedAnimation(buttonInnerHTML);
    });
}
//   ====== Detect the key / press the correct key and call the function for playing the sounds =======

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonPressedAnimation(event.key);
});

function playSound(key) {
    switch (key) {
        case "w":
            var audio_tom1 = new Audio("sounds/tom-1.mp3");
            audio_tom1.play();

            break;
        case "a":
            var audio_tom2 = new Audio("sounds/tom-2.mp3");
            audio_tom2.play();

            break;

        case "s":
            var audio_tom3 = new Audio("sounds/tom-3.mp3");
            audio_tom3.play();

            break;
        case "d":
            var audio_tom4 = new Audio("sounds/tom-4.mp3");
            audio_tom4.play();

            break;
        case "j":
            var audio_crash = new Audio("sounds/crash.mp3");
            audio_crash.play();

            break;
        case "k":
            var audio_kick = new Audio("sounds/kick-bass.mp3");
            audio_kick.play();

            break;
        case "l":
            var audio_snare = new Audio("sounds/snare.mp3");
            audio_snare.play();

            break;
        case "n":
            var audio_conga = new Audio("sounds/deep-conga.mp3");
            audio_conga.play();

            break;
        case "m":
            var audio_djembe = new Audio("sounds/djembe-roll-B.mp3");
            audio_djembe.play();

            break;

        default:
            // alert("Try one of these keys: W - A - S - D - J - K - L");
            break;
    }
}


function buttonPressedAnimation(pressedKey) {
    var pressedButton = document.querySelector("." + pressedKey)
    pressedButton.classList.add("pressed");
    setTimeout(function() {
        pressedButton.classList.remove("pressed");
    }, 100);
}