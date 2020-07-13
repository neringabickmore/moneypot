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
 * This function sets the Game card
 * @param {[]} game
 */
const setGame = (game) => {
  displayLevel(game[0].level);
  displayTask(game[0].tps[0]);
  displayPrice(game[0].tps[0]);
  displayCoins(game[0].coins);
  displaySum(game[0].coins)
};

/**
 * Function displaying game level
 * @param {"string"} levelText 
 */
const displayLevel = (levelText) => {
  showLevel = ``
  showLevel += `<h1>${levelText}</h1>`;
  levelRef.innerHTML = showLevel;
}
/**
 * Function displaying game tasks
 * @param {[]} taskArray 
 */
const displayTask = (taskText) => {
  let showTask = ``
  showTask += `<h1>${taskText.thisTask}</h1>`
  taskRef.innerHTML = showTask;
}

/**
 * Function displaying price tag
 * @param {[]} priceText
 */
const displayPrice = (priceText) => {
  let showPrice = ``;
  showPrice += `<h1>${priceText.priceTag}</h1>`;
  priceRef.innerHTML = showPrice;
};

/**
 * Function displaying coins that are buttons
 * @param {[]} coinArray
 */
const displayCoins = (coinArray) => {
  console.log(coinArray)
  let coinButton = ``;
  coinArray.forEach((coin) => {
    coinButton += `<div class="col-5 col-sm-3 text-center">
         <button class="coin coin-button" value="${coin.value}" type="button" aria-hidden="true">
      <img src="${coin.source}" alt="${coin.name}" class="img h-75 w-75">
      </button>
    </div>`;
  });
  coinButtonRef.innerHTML = coinButton;
  // This is an event listener giving coin value on every click
  $(".coin-button").click(function () {
    addCoinValue($(this).attr("value"))
  });
}
/**
 * This function takes coin value in a string,
 * converts it into a number which then allows displaySum
 * of all of the coins the user clicks on.
 * @param {number} coinValue 
 */
function addCoinValue(coinValue) {
  sum += JSON.parse(coinValue);
  displaySumRef.innerHTML = `<h1>${sum}p</h1>`;
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
};
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