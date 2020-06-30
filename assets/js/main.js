// This creates contact form
// when the user clicks on the "envelope" sign
// in the footer.

const contactForm = document.createElement("div");
$("#contact-form-box")[0].appendChild(contactForm);
contactForm.innerHTML = `<!-- 1.1 Contact form: Header-->
                <div class="modal-header">
                  <div
                    class="modal-title col-12 font-weight-normal text-center"
                    id="contactFormHeader"
                  >
                    <button
                      type="button"
                      class="close p-1"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                    <h5>
                      Help us improve! We value every customer and your feedback
                      matters to us.
                    </h5>
                  </div>
                </div>
                <!-- 1.2 Contact form: Main body -->
                <form class="container pt-3">
                  <div class="row justify-content-center">
                    <div class="col-12 col-sm-6">
                      <!-- 1.1.1 name input-->
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control text-center"
                          id="name"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <!-- 1.1.2 email address input----->
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control text-center"
                          id="email"
                          placeholder="Your email address"
                          required=""
                        />
                      </div>
                      <!-- 1.1.3 question one------->
                      <div class="form-group text-center">
                        <div class="px-0">
                          <label
                            for="formQ1"
                            class="form-control col-form-label"
                          >
                            How challenging were the tasks for your
                            child?</label
                          >
                        </div>
                        <div class="px-0">
                          <select class="form-control" id="formQ1">
                            <option selected=""></option>
                            <option>Too challenging</option>
                            <option>Very challenging</option>
                            <option>At the right level</option>
                            <option>Could be more challening</option>
                            <option>Not challenging at all</option>
                          </select>
                        </div>
                      </div>
                      <!-- 1.1.4 question two-->
                      <div class="form-group text-center">
                        <div class="px-0">
                          <label
                            for="#formQ2"
                            class="form-control col-form-label"
                          >
                            Did your child find the game entertaining?</label
                          >
                        </div>
                        <div class="px-0">
                          <select class="form-control" id="formQ2">
                            <option selected=""></option>
                            <option>Very entertaining</option>
                            <option>Entertaining</option>
                            <option>Not entertaining</option>
                            <option>Boring</option>
                          </select>
                        </div>
                      </div>
                      <!-- 1.1.5 question three-->
                      <div class="form-group text-center">
                        <div class="px-0">
                          <label
                            for="interestedInMore"
                            class="form-control col-form-label"
                          >
                            Would you like to hear about similar games?</label
                          >
                        </div>
                        <div class="px-0">
                          <select class="form-control" id="interestedInMore">
                            <option selected=""></option>
                            <option>Yes</option>
                            <option>No</option>
                          </select>
                        </div>
                      </div>
                      <!-- 1.1.6 suggestions-->
                      <div class="form-group text-center">
                        <label
                          for="otherinfo"
                          class="form-control col-form-label"
                          >Your suggestions</label
                        >
                        <textarea
                          class="form-control"
                          id="otherinfo"
                          rows="3"
                        ></textarea>
                      </div>
                      <!-- 1.1.7 legal/consent information-->
                      <div class="from-group">
                        <div class="form-legal-info">
                          <small class="form-text">
                            We'll never share your personal details with anyone
                            else.</small
                          >
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="gridCheck"
                              required=""
                            />
                            <label class="form-check-label" for="gridCheck">
                              <small class="form-text">
                                I consent to Money Pot collecting my details
                                through this form.</small
                              >
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <!-- 1.3 Contact form: Send button -->
                <div class="modal-footer justify-content-center">
                  <button
                    type="button"
                    class="btn"
                    data-toggle="modal"
                    data-target="#thank-you-note"
                  >
                    <i
                      class="fas fa-paper-plane"
                      type="button"
                      aria-hidden="true"
                      title="send!"
                    ></i
                    ><span class="sr-only"> Paper plane </span>
                  </button>
                  <!-- 2. Thank you note-->
                  <div
                    class="modal fade"
                    id="thank-you-note"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="thankYouNoteHeader"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-md">
                      <div class="modal-content thank-you-box">
                        <!-- 2.1 Thank you note: Header-->
                        <div class="modal-header">
                          <div
                            class="modal-title col-12 text-center"
                            id="thankYouNoteHeader"
                          >
                            <h5>
                              Thank you!
                            </h5>
                          </div>
                        </div>
                        <!-- 2.2 Thank you note: Main body -->
                        <div class="container pt-3">
                          <div class="row">
                            <div class="col text-center">
                              <p>We will get back to you within 48 hours.</p>
                            </div>
                          </div>
                        </div>
                        <!-- 2.3 Thank you note: Exit button -->
                        <div class="modal-footer justify-content-center">
                          <button
                            type="button"
                            class="btn"
                            data-dismiss="modal"
                          >
                            <i
                              class="fas fa-times-circle"
                              type="button"
                              aria-hidden="true"
                              title="Exit!"
                            ></i
                            ><span class="sr-only"> Cross </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;

// This creates modal displaying game rules
// when the user clicks on the "question" icon
// displayed on the game dashboard -> game navigation.

const gameRules = document.createElement("div");
$("#game-rules-box")[0].appendChild(gameRules);
gameRules.innerHTML = `<!-- 1.1 How to play: Header-->
                        <div class="modal-header">
                          <div
                            class="modal-title col-12"
                            id="gameRulesDescription"
                          >
                            <h4 class="font-weight-bolder text-center">
                              How to play?
                            </h4>
                          </div>
                        </div>
                        <!-- 1.2 How to play: Main body -->
                        <div class="container pt-3">
                          <div class="row">
                            <div class="col text-left">
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
                            </div>
                          </div>
                        </div>
                        <!-- 1.3 How to play: exit button -->
                        <div class="modal-footer justify-content-center">
                          <button
                            type="button"
                            class="btn"
                            data-dismiss="modal"
                          >
                            <i
                              class="fas fa-times-circle"
                              type="button"
                              aria-hidden="true"
                              title="close"
                            ></i
                            ><span class="sr-only"> close </span>
                          </button>
                        </div>`;

// Audio functions:
// 1. Play button click audio when clicked
//    on all elements with .btn class.

$(".btn").click(function () {
  playButtonAudio();
});
function playButtonAudio() {
  $("#buttonClickAudio")[0].currentTime = 0;
  $("#buttonClickAudio")[0].play();
}

// 2. Play coin click audio when clicked
//    on all coin buttons.
$(".coin").click(function () {
  addCoinAudio();
});
function addCoinAudio() {
  $("#coinClickAudio")[0].currentTime = 0;
  $("#coinClickAudio")[0].play();
}

// 3. Mute audio for all buttons
// ***BugFix (Mute & Unmute audio):
//          1. allAudio given constant variable to remove
//             error appearance in dev tools.
//          2. unnecesary lines off code removed to eliminate
//             error appearance in dev tools.
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

// GAME CARD:
// 1.1 Game Console: COIN variables defined for each level of the game
const coinsL1 = [1, 2, 5, 10];
const coinsL2 = [1, 2, 5, 10, 20];
const coinsL3 = [1, 2, 5, 10, 20, 50];

// 1.2 Game console: COIN IMAGE variables defined for each level of the game
const coinImagesL1 = [
  "assets/images/1p.png",
  "assets/images/2p.png",
  "assets/images/5p.png",
  "assets/images/10p.png",
];
const coinImagesL2 = [
  "assets/images/1p.png",
  "assets/images/2p.png",
  "assets/images/5p.png",
  "assets/images/10p.png",
  "assets/images/20p.png",
];
const coinImagesL3 = [
  "assets/images/1p.png",
  "assets/images/2p.png",
  "assets/images/5p.png",
  "assets/images/10p.png",
  "assets/images/20p.png",
  "assets/images/50p.png",
];

// 1.3 Game console: Variables defined for CURRENT: Level, Task, Coins, Coin Images
let currentLevel = 1,
  currentTask = 1,
  currentCoinImages = [
    "assets/images/1p.png",
    "assets/images/2p.png",
    "assets/images/5p.png",
    "assets/images/10p.png",
  ];
let currentCoins = [1, 2, 5, 10];
// 1.4  Game console: Variable defined for the GAME STAGE SCREEN DISPLAY
let gameStageDisplay = {
  "Level 1": {
    displayCoins: { coinsL1 },
    displayCoinImages: { coinImagesL1 },
    "Task 1": {},
    "Task 2": {},
    "Task 3": {},
    "Task 4": {},
    "Task 5": {},
    "Task 6": {},
  },
  "Level 2": {
    displayCoins: { coinsL2 },
    displayCoinImages: { coinImagesL2 },
    "Task 1": {},
    "Task 2": {},
    "Task 3": {},
    "Task 4": {},
    "Task 5": {},
    "Task 6": {},
  },
  "Level 3": {
    displayCoins: { coinsL3 },
    displayCoinImages: { coinImagesL3 },
    "Task 1": {},
    "Task 2": {},
    "Task 3": {},
    "Task 4": {},
    "Task 5": {},
    "Task 6": {},
  },
};

// Function to call html document:
$(document).ready(function () {
  gameStage();
});

//function to define game Stage and call required variables
function gameStage() {
  $("#gameLevel").html(`Level ${currentLevel}`);
  $("#gameTask").html(`Task ${currentTask}`);
}

//LEFT TO DO:
// Game Console:
// 2.1 Define price tag display in each level
// 2.3 Definte Initial sum  variable
// 2.4 Write a function for the sum variable
// Game Dashboard:
// 1.3 Define highlighted star display for each completed task
//
