// Global variables & methods
const coinButtonRef = document.getElementById("coin");
const priceRef = document.getElementById("price");
const displaySumRef = document.getElementById("sum");
const taskRef = document.getElementById("gameTask");
const levelRef = document.getElementById("gameLevel");

const backdropLabelContent = document.createElement("h6");
const modalBodyContent = document.createElement("div");
const modalFooterContent = document.createElement("div");

document.getElementById("modalHeader").appendChild(backdropLabelContent);
document.getElementById("modalBody").appendChild(modalBodyContent);
document.getElementById("modalFooter").appendChild(modalFooterContent);

let levelNumber = 0;
let taskNumber = 0;
let sum = 0;
let star = 0;

let currentLevel;
let currentTask;
let coinValue;
let price;
let task;
let level;
let soundOn;

$(document).ready(function () {
  fetchData("game.json");
});

// Global event listeners

$(".btn").click(function () {
  let audioButtonId = "#buttonClickAudio";
  audioButton(audioButtonId);
});

$("#resetSum").click(function () {
  resetSum();
});

$("#resetGame").click(function () {
  resetGame();
});

$("#soundOff").click(function () {
  let soundOff = true;
  muteAudio(soundOff);
});

$("#soundOn").click(function () {
  let soundOff = false;
  muteAudio(soundOff);
});

/**
 * Fetches data to game display.
 * @returns {string} All data in game.json
 */
const fetchData = () => {
  return fetch(`assets/data/game.json`)
    .then((res) => res.json())
    .then(gameData => {
      setGame(gameData.game);
    })
    .catch((err) => console.log(err));
};

/**
 * Initiates the game display
 * starting with Level 1 & Task 1,
 * first priceTag and coins associated.
 * @param {[]} game - The whole game.json data.
 */

const setGame = (game) => {

  currentLevel = game[levelNumber];
  currentTask = currentLevel.taskArray[taskNumber];

  levelRef.innerHTML = `<h1>Level ${currentLevel.level}</h1>`;
  taskRef.innerHTML = `<h1>Task ${currentTask.thisTask}</h1>`;
  priceRef.innerHTML = `<h1>${currentTask.priceTag}p</h1>`;

  coinButtonRef.innerHTML = ``;

  currentLevel.coins.forEach((coin) => {
    coinButtonRef.innerHTML +=
      `<div class="col-5 col-sm-3 text-center">
        <button class="coin-button" value="${coin.value}" type="button" aria-hidden="true">
          <img src="${coin.source}" alt="${coin.name}" class="img h-75 w-75">
        </button>
      </div>`;
  });

  // Coin information send to the game when clicked on.
  $(".coin-button").click(function () {

    coinValue = +($(this).attr("value"));
    price = currentTask.priceTag;
    task = currentTask.thisTask;
    level = currentLevel.level;

    let audioButtonId = "#coinClickAudio";

    addCoinValue();
    audioButton(audioButtonId);

  });
  displaySum();
};

// This function pushes the information for the next task.
const nextTask = () => {
  taskNumber++;
  fetchData();
  rewardStars();
};

// This function pushes the information for the next level.
const nextLevel = () => {
  levelNumber++;
  fetchData();
  resetStars();
};

/**
 * Allows coin value to add to total sum 
 * as well as open up relevant modals
 * dependant on the user actions
 * level of the game they are at.
 */
const addCoinValue = () => {
  sum += coinValue;
  displaySumRef.innerHTML = `<h1>${sum}p</h1>`;

  if (sum === price && task >= 6 && level >= 3) {
    openModal("endOfGame");
    let audioButtonId = "#winnerAudio";
    delayedAudioButton(audioButtonId)

  } else if (sum === price && task >= 6) {
    openModal("nextLevel");
    let audioButtonId = "#nextLevelAudio";
    delayedAudioButton(audioButtonId)

  } else if (sum > price) {
    openModal("reset");
    let audioButtonId = "#tryAgainAudio";
    delayedAudioButton(audioButtonId)

  } else if (sum === price) {
    openModal("nextTask");
    let audioButtonId = "#yippeeAudio";
    delayedAudioButton(audioButtonId)
  }
};

/**
 * This function created modal footer and
 * replace it's button & id depending on the outcome 
 * on addCoinValue (on the switch).
 * @param {string} state - Pass the info to match switch statement.
 */
const openModal = (state) => {
  let buttonText = ``;
  let buttonId = ``;
  let iClassFooter = ``;
  let iClassBody = ``;
  let bodyText = ``;
  let srOnly = ``;

  //Changes the info passed into modals
  switch (state) {
    case "nextTask":
      buttonText = "Next Task";
      buttonId = "nextTask";
      iClassFooter = "fa fa-play";
      iClassBody = "fas fa-star";
      bodyText = "Congratulations! You are now through to the next task!";
      srOnly = "star";
      break;

    case "nextLevel":
      buttonText = "Next Level";
      buttonId = "nextLevel";
      iClassFooter = "fa fa-play";
      iClassBody = "fas fa-medal";
      bodyText = "Congratulations! You are now through to the next level!";
      srOnly = "medal";
      break;

    case "reset":
      buttonText = "Reset";
      buttonId = "errorModal";
      iClassFooter = "fas fa-redo";
      iClassBody = "far fa-frown";
      bodyText = "The sum is not correct. Please check your coins!";
      srOnly = "sad face";
      break;
    case "endOfGame":
      buttonText = "Start again";
      buttonId = "endOfGame";
      iClassFooter = "fas fa-sync";
      iClassBody = "fas fa-trophy";
      bodyText = "Congratulations! You are a winner!";
      srOnly = "trophy";
      break;

  }

  backdropLabelContent.innerHTML = `<h6 class="modal-title text-center">${bodyText}</h6>`;
  modalBodyContent.innerHTML = `<div><i class="${iClassBody}" aria-hidden="true"></i><span
    class="sr-only">${srOnly}</span></div>`;
  modalFooterContent.innerHTML = `<div><button id="${buttonId}" type="btn" class="modal-btn rounded pl-3" data-dismiss="modal">${buttonText}<i class="${iClassFooter} p-2" aria-hidden="true"></i></button></div>`;

  /**
   * This method allows to fetch the information 
   * to index.html and assing appopriate content.
   */
  $("#modal").modal("toggle");

  $("#nextTask").click(function () {
    resetSum();
    nextTask();
  });

  $("#errorModal").click(function () {
    resetSum();
  });

  $("#nextLevel").click(function () {
    resetSum();
    nextLevel();
    resetTask();
    resetStars();
  });

  $("#endOfGame").click(function () {
    resetGame();
  });
};

// Displays total sum in the div.
const displaySum = () => {
  displaySumRef.innerHTML = `<h1>${sum}p</h1>`;
};

// Resets the sum to 0.
const resetSum = () => {
  sum = 0;
  displaySumRef.innerHTML = `<h1>${sum}p</h1>`;
};

// Resets task of the game to the starting point.
const resetTask = () => {
  taskNumber = 0;
  resetStars();
};

// Resets level of the game to the starting point.
const resetLevel = () => {
  levelNumber = 0;
};

// Resets the game back to the begining.
const resetGame = () => {
  resetLevel();
  resetSum();
  resetTask();
  fetchData();
};

// Rewards a user with the yellow stars.
const rewardStars = () => {
  star++;
  for (let i = 1; i <= star; i++) {
    let element = document.getElementById(`star${i}`);
    element.classList.remove("no-star");
    element.classList.add("yes-star");
  }
};

// Resets all stars back to white.
const resetStars = () => {
  star = 0;
  for (let i = 1; i <= 6; i++) {
    let element = document.getElementById(`star${i}`);
    element.classList.remove("yes-star");
    element.classList.add("no-star");
  }
};

/**
 * Plays audio on at a click of 
 * elements with class: .btn and .coin-button.
 * @param {string} audioButtonId - Passes an ID.
 */
const audioButton = (audioButtonId) => {
  $(`${audioButtonId}`)[0].currentTime = 0;
  $(`${audioButtonId}`)[0].play();
};

/**
 * Plays audio on modal openings: 
 * nextTask, reset, nextLevel, endOfGame.
 * @param {string} audioButtonId - Passed an Id.
 */
const delayedAudioButton = (audioButtonId) => {
  setTimeout(function () {
    $(`${audioButtonId}`)[0].play();
  }, 800);
};

/**
 * Mute/unmute audio.
 * @param {string} soundOff - Targets all audio elements in html.
 */
const muteAudio = (soundOff) => {
  const allAudio = $("audio");
  if (soundOff) {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].muted = true;
    };
  } else {
    for (let i = 0; i < allAudio.length; i++) {
      allAudio[i].muted = false;
    };
  };
};