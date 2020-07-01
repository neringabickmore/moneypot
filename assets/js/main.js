// This displays Game Rules Main content to the user
const gameRulesMain = document.createElement("DIV");
$("#gameRulesMain")[0].appendChild(gameRulesMain);
gameRulesMain.innerHTML = `<div class="col text-left">
                              <ul>
                                <li>
                                  Show your child some real coins. Let them
                                  identify the number on the price tag. Help
                                  your child to recognise the coins on the
                                  screen.
                                </li>
                                <li>
                                  To start, click on the chosen coins until
                                  below sum display is equal to the price tag.
                                  Please encourage your child to use a variety
                                  of coins. Every time they play the game they
                                  can choose alternative coins to come up with
                                  the sum.
                                </li>
                                <li>
                                  There are 3 levels to complete with 6 tasks in
                                  each. Every correct task is rewarded with a
                                  star. The task will restart if the sum is
                                  greater than the price tag.
                                </li>
                                <li>
                                  Have fun playing the game with your child and
                                  please remember to leave us your feedback!
                                </li>
                              </ul>
                            </div>`;

// This displays Game Rules Header to the user

const gameRulesHeader = document.createElement("H4");
$("#gameRulesHeader")[0].appendChild(gameRulesHeader);
gameRulesHeader.innerHTML = `<h4 class="font-weight-bolder text-center">
                              How to play?
                            </h4>`;

/* Audio functions:
    1. Play button click audio when clicked
    on all elements with .btn class. */

$(".btn").click(function () {
  playButtonAudio();
});
function playButtonAudio() {
  $("#buttonClickAudio")[0].currentTime = 0;
  $("#buttonClickAudio")[0].play();
}

/* 2. Play coin click audio when clicked
    on all coin buttons. */
$(".coin").click(function () {
  addCoinAudio();
});
function addCoinAudio() {
  $("#coinClickAudio")[0].currentTime = 0;
  $("#coinClickAudio")[0].play();
}

/* 3. Mute audio for all buttons
          ***BugFix (Mute & Unmute audio):
          1. allAudio given constant variable to remove
            error appearance in dev tools.
          2. unnecesary lines off code removed to eliminate
             error appearance in dev tools. */

$("#soundOff").click(function () {
  muteAudio();
});
const soundOff = true;
function muteAudio() {
  const allAudio = $("audio");
  if (soundOff) {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].muted = true;
    }
  }
}

// 4. Unmute audio for all buttons

$("#soundOn").click(function () {
  unMuteAudio();
});
const soundOn = true;
function unMuteAudio() {
  const allAudio = $("audio");
  if (soundOn) {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].muted = false;
    }
  }
}

$(document).ready(function () {
  fetchData("coins.json");
});
// Created variable to get coinButton by calling coinButtonRef
const coinButtonRef = document.getElementById("coin");
const fetchData = (url) => {
  fetch(`assets/data/${url}`)
    .then((res) => res.json())
    .then((json) => {
      displayCoins(json);
    });
};

//Created function to displayCoin images fetched from coins.json
// ***BugFix:
//    coinButton was display additional "undefined" item because was missing `` to pass in a string.
//    Adding `` fixed this bug.
const displayCoins = (coinArray) => {
  let coinButton = ``;
  coinArray.forEach((coinImage) => {
    coinButton += `
    <div class="col-5 col-sm-3 text-center">
      <a class="coin" href="#">
      <img src="${coinImage.source}" alt="${coinImage.name}" class="img h-75 w-75">
      </a>
    </div>`;
  });
  coinButtonRef.innerHTML = coinButton;
};

// Function to call html document:
//$(document).ready(function () {
// gameStage();
//});

//function to define game Stage and call required variables
// function gameStage() {
//   $("#gameLevel").html(`Level ${currentLevel}`);
//   $("#gameTask").html(`Task ${currentTask}`);
//   $("#coins").html(`${currentCoinImages}`);
//   displayCoins();
// }

// //LEFT TO DO:
// // Game Console:
// // 2.1 Define price tag display in each level
// // 2.3 Definte Initial sum  variable
// // 2.4 Write a function for the sum variable
// // Game Dashboard:
// // 1.3 Define highlighted star display for each completed task
