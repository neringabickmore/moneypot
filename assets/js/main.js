// TODO GAME FLOW:
/**
 * (A) START OF THE GAME DISPLAY: 
 *  4. display 6 white stars, as assigned in JSON at L1 T1 =(rewardStar)
 * (B) GAME ON:
 * 2. When the (displaySum) === (priceTag)  then a Congrats Modal comes up with a button nextTask
 * 3. nextTask should then have on a display:
 *    (1) "Level 1", "Task 2"
 *    (maybe tie this in somehow with = (setLevel) ?)
 *    (2) Display 1 yellow and 5 white stars =(rewardStar)
 *    (3) new priceTag (price tag assigned to L1 T2)
 *    (4) sum reset to 0 =(sumReset)
 *    (5) coin display doesnt change
 *
 * (B.1)
 * This action should be repeat until it reaches L1 T6 (increasing no of yellow stars at T2, T3 etc)
 * When at L1 T6 sum === priceTag then a Congrats Modal comes up with a button =(nextLevel) (not nextTask)
 * (addEventListener(when sum === PriceTag displayCongratsModal, else display badSum if sum > priceTag))
 *
 * (B.2)
 * At (nextLevel) (L2), the display differs from L1 is as follows:
 * 1. display: L2 T1
 * 2. Stars are reset =(resetStars)
 * 3. display coins assigned to Level 2 gameCard(json) = game[1].coins[0])
 * (B.3)
 * The next steps repeat itself as per steps on L1
 *
 * (C) END OF THE GAME =(EOG)
 * The game ends when the user reached L1 Task 6 sum === priceTag then Winner modal comes up with a button to resetGame (=(resetGame))button AND button to feedbackForm (${`#feedbackForm`}.hmtl(feedback)
 *
 */

// TODO  WRITE:
/* function nextLevel() {
 * }
 * function nextTask() {
 * }
 * function rewardStar() {
 * }
 * function resetStars() {
 * }
 * function resetSum(){
 * }
 * function resetGame() {
 * }
 * function enfOfGame(){
 * }
 * function addCoinAudio(){
 * }
 * function correctSumAudio(){
 * }
 * function badSumAudio() {
 * }
 * function winnerAudio(){
 * }
 *
 */

//Variables

const coinButtonRef = document.getElementById("coin");
const priceRef = document.getElementById("price");
const displaySumRef = document.getElementById("sum");
const taskRef = document.getElementById("gameTask");
const levelRef = document.getElementById("gameLevel");
const soundOff = true;
const soundOn = true;
let sum = 0;

$(document).ready(function () {
  fetchData("game.json")
})

// return setLevel(result);
/**
 * Fetch data from:
 * @param {string} url allows
 * game data to show on the index.html form JSON file
 */
const fetchData = (url) => {
  return fetch(`assets/data/${url}`)
    .then((res) => res.json())
    .then(gameData => {
      console.log(gameData.game)
      setGame(gameData.game)
    })
    .catch((err) => console.log(err))
};

/**
 * setGame initiates the game and it's display
 * @param {[]} game 
 */
const setGame = (game) => {
  let showLevel = ``,
    showTask = ``,
    showPrice = ``,
    coinButton = ``;
  showLevel += `<h1>Level ${game[0].level}</h1>`;
  showTask += `<h1>Task ${game[0].tps[0].thisTask}</h1>`;
  showPrice += `<h1>${game[0].tps[0].priceTag}p</h1>`;
  game[0].coins.forEach((coin) => {
    coinButton += `<div class="col-5 col-sm-3 text-center">
         <button class="coin coin-button" value="${coin.value}" type="button" aria-hidden="true">
      <img src="${coin.source}" alt="${coin.name}" class="img h-75 w-75">
      </button>
    </div>`;
  });
  levelRef.innerHTML = showLevel;
  taskRef.innerHTML = showTask;
  priceRef.innerHTML = showPrice;
  coinButtonRef.innerHTML = coinButton;
  //This is an event listener giving coin value on every click
  $(".coin-button").click(function () {
    addCoinValue($(this).attr("value"));
  });
  displaySum(game);
}

/**
 * This function takes coin value in a string,
 * converts it into a number which then allows displaySum
 * of all of the coins the user clicks on.
 * @param {number} coinValue
 */
function addCoinValue(game, displayPrice, displayTask) {
  sum += +game[0].coins[0].value;
  console.log(+game[0].coins[0].value)
  displaySumRef.innerHTML = `<h1>${sum}p</h1>`;

  if (sum === displayPrice) {
    nextTaskModal();
    return

  } else if (sum > displayPrice) {
    repeatTaskModal()
    return
  } else if (sum === displayPrice && displayTask >= 6) {
    nextLevelModal()
    return
  }
  return

}

/**
 * 1. When the sum is equal to displayPrice
 * pop up modal displays "congrats"
 * it also displays button to go to the nextTask.
 */
function nextTaskModal() {
  const nextTask = document.createElement("div");
  nextTask.innerHTML = `<div class="modal-footer"><button id="nextTask" type="button" class="btn" data-dismiss="modal"> Next task <i class="fa fa-play p-2" aria-hidden="true"></i></button></div>`;
  $("#nextTask").click(function () {
    resetSum();
    nextTask();
  });
  document.getElementById("modalBody1").appendChild(nextTask);
  $("#CongratsModal").modal("toggle");

}

/**
 * 2. When the sum is larger than the displayPrice
 * pop up modal displays "error"
 * it also displays button to try again
 * and takes the user to repeat the task
 */
function repeatTaskModal() {
  const resetSum = document.createElement("div");
  resetSum.innerHTML = `<div class="modal-footer button"><a data-dismiss="modal" onclick="resetSum()"><i class="fas fa-redo btn" id="errorModal" aria-hidden="true"></i><span class="sr-only">reset</span></a></div>`;
  $("#errorModal").click(function () {
    resetSum();
  });
  document.getElementById("modalBody3").appendChild(resetSum);
  $("#errorModal").modal("toggle");
}

/**
 * 3. When the sum is equal to the displayPrice AND
 * displayTask is equal to 6 (user is at the last 
 * task of the level they are in), pop up 
 * modal displays button to go to the nextLevel.
 */
function nextLevelModal() {
  const nextLevel = document.createElement("div");
  nextLevel.innerHTML = `<div class="modal-footer"><button id="nextLevel" type="button" class="btn" data-dismiss="modal"> Next Level <i class="fa fa-play p-2" aria-hidden="true"></i></button></div>`;
  $("#nextLevel").click(function () {
    resetSum();
    nextLevel();
  });
  document.getElementById("modalBody2").appendChild(nextLevel);
  $("#CongratsModal").modal("toggle");
}


/**
 * Function to display initial
 * sum value of 0 at the start
 * of the game. If it's removed, 
 * you remove initial sum display
 * and leave it blank
 */
function displaySum() {
  displaySumRef.innerHTML = `<h1>${sum}p</h1>`;
}

//ALL AUDIO FUNCTIONS
/**
 * Function enabling an audio
 * at a click of a button in HTML.
 * If you remove it, elements with
 * .btn class won't have a sound.
 */

$(".btn").click(function () {
  playButtonAudio();
});

function playButtonAudio() {
  $("#buttonClickAudio")[0].currentTime = 0;
  $("#buttonClickAudio")[0].play();
}
/**
 * Function enabling an audio
 * at a click of a coin image in HTML.
 * If you remove it, elements with
 * .coin class won't have a sound.
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