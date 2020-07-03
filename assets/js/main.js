// Variables

const coinButtonRef = document.getElementById("coin");
const gameRulesMain = document.createElement("div");
const gameRulesHeader = document.createElement("h4");
const soundOff = true;
const soundOn = true;

$(document).ready(function () {
  fetchData("coins.json");
});

/**
 * This function creates a div in HTML and gives it some content.
 */
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

$("#gameRulesHeader")[0].appendChild(gameRulesHeader);
gameRulesHeader.innerHTML = `<h4 class="font-weight-bolder text-center">
                              How to play?
                            </h4>`;

/**
 * Function enabling an audio at a click of a button in HTML.
 * If you remove it, elements with .btn class won't have a sound.
 */

$(".btn").click(function () {
  playButtonAudio();
});
function playButtonAudio() {
  $("#buttonClickAudio")[0].currentTime = 0;
  $("#buttonClickAudio")[0].play();
}

/**
 * Function enabling an audio at a click of a coin image in HTML.
 * If you remove it, elements with .coin class won't have a sound.
 */
$(".coin").click(function () {
  addCoinAudio();
});
function addCoinAudio() {
  $("#coinClickAudio")[0].currentTime = 0;
  $("#coinClickAudio")[0].play();
}

$("#soundOff").click(function () {
  muteAudio();
});
/**
 *  This function mutes all buttons
 * when the "sound-off" button
 * located in index.html is clicked on
 */
function muteAudio() {
  const allAudio = $("audio");
  if (soundOff) {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].muted = true;
    }
  }
}

$("#soundOn").click(function () {
  unMuteAudio();
});
/**
 *  This function unmutes all buttons
 * when the "sound-on" button
 * located in index.html is clicked on
 */
function unMuteAudio() {
  const allAudio = $("audio");
  if (soundOn) {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].muted = false;
    }
  }
}
/**
 * Fetch data from:
 * @param {"assets/data/coins.js"} url allows
 * coins to show on the index.html.
 */
const fetchData = (url) => {
  fetch(`assets/data/${url}`)
    .then((res) => res.json())
    .then((json) => {
      displayCoins(json);
    });
};

/**
<<<<<<< HEAD
 * Create a button div and button for each coinS
 * @param {"coins"} coinArray
=======
 * Create a button div and button for each coin
 * @param {coins} coinArray
>>>>>>> f191e9a7f496cc1deb2ff807e2bb20234ae8a678
 * is array of coins
 */
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
