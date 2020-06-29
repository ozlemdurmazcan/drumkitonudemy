var drumArray = document.querySelectorAll(".drum")
for (let i = 0; i < drumArray.length; i++) {
    let drum = drumArray[i];
    this.addEventListener("click", function() {
        this.style.color = "white";
    })
    drum.addEventListener("click", hearSounds);


    function hearSounds() {
        // console.log(this);
        // alert(this.textContent);
        this.style.color = "#e6beae";
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
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
            default:
                console.log(buttonInnerHTML);
                break;
        }
    }
}


//   ====== option2 with conditionals =======

// function hearSounds() {
//     if (i === 0) {
//         var audio_tom1 = new Audio("sounds/tom-1.mp3");
//         audio_tom1.play();
//         document.querySelectorAll(".drum")[0].style.color = "#e6beae";
//     } else if (i === 1) {
//         var audio_tom2 = new Audio("sounds/tom-2.mp3");
//         audio_tom2.play();
//         document.querySelectorAll(".drum")[1].style.color = "#e6beae";
//     } else if (i === 2) {
//         var audio_tom3 = new Audio("sounds/tom-3.mp3");
//         audio_tom3.play();
//         document.querySelectorAll(".drum")[2].style.color = "#e6beae";
//     } else if (i === 3) {
//         var audio_tom4 = new Audio("sounds/tom-4.mp3");
//         audio_tom4.play();
//         document.querySelectorAll(".drum")[3].style.color = "#e6beae";
//     } else if (i === 4) {
//         var audio_crash = new Audio("sounds/crash.mp3");
//         audio_crash.play();
//         document.querySelectorAll(".drum")[4].style.color = "#e6beae";
//     } else if (i === 5) {
//         var audio_kick = new Audio("sounds/kick-bass.mp3");
//         audio_kick.play();
//         document.querySelectorAll(".drum")[5].style.color = "#e6beae";
//     } else if (i === 6) {
//         var audio_snare = new Audio("sounds/snare.mp3");
//         audio_snare.play();
//         document.querySelectorAll(".drum")[6].style.color = "#e6beae";
//     }
// }