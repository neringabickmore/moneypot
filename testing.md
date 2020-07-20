# Money Pot - Testing details

[Main README.md file](README.md)

[View website in GitHub Pages]()

## Table of Contents ##

## Automated Testing ##

### Validation Services ###

The following validation services and linter were used to check the validity of the website code.
- [W3C Markup Validation]( https://validator.w3.org/) was used to validate HTML.
- - [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.

### Client stories testing

## Manual testing

### Testing undertaken on desktop

### Testing undertaken on tablet and phone devices

### Bugs discovered

#### Solved bugs

**1. Dev tools were throwing an error in console.**

- Fix: all audio buttons were given const and removed let.

```javascript
const soundOff = true;
const soundOn = true
```

**2. Event listener was not registering addCoinAudio.**

- Fix: migrated addCoinAudio event listener into setGame function.

**3. Function nextTask was not dislaying the next task in the array.**

- The ```nextTask()``` function was throwing the following error when I was trying to get to game console to take me to the next task of the game:

  ![nextTaskError](/assets//testing/images/nextTaskError.jpg)

- Fix:
  I have identified that I wasn't passing correct data into my functions, effected by ```nextTask()``` and therefore changed the code as follows:
  1. Made ```levelNumber``` and ```taskNumber``` global functions;
  2. Changed parameters for ```setGame()```;
  3. Within ```setGame``` function I have changed how I was calling correct data;
  4. Simplified my ```nextTask()``` function completely;

```javascript
1.
let levelNumber = 0;
let taskNumber = 0;

2.
const fetchData = () => {
  return fetch(`assets/data/game.json`)
    .then((res) => res.json())
    .then(gameData => {
      setGame(gameData.game);
    })
    .catch((err) => console.log(err));
};

3.
const setGame = (game) => {
  currentGame = game[levelNumber];
  currentTPS = currentGame.tps[taskNumber];
  ...}

4.
const nextTask = () => {
  taskNumber++;
  fetchData();
```

**3. Function ```setGame()``` not clearing information when displaying ```newTask()```:

![nextTaskError](/assets//testing/images/nextTaskDisplayError.jpg)

- Fix: cleared data passed into html file before fetching new info:

```javascript
levelRef.innerHTML = `<h1>Level ${currentGame.level}</h1>`;
taskRef.innerHTML = `<h1>Task ${currentTPS.thisTask}</h1>`;
priceRef.innerHTML = `<h1>${currentTPS.priceTag}p</h1>`;
coinButtonRef.innerHTML = ``;
currentGame.coins.forEach((coin) => {
coinButtonRef.innerHTML +=
 `<div class="col-5 col-sm-3 text-center">
   <button class="coin coin-button" value="${coin.value}" type="button" aria-hidden="true">
    <img src="${coin.source}" alt="${coin.name}" class="img h-75 w-75">
   </button>
  </div>`;
```

**4. Modal display is not clearing initial display before loading the next:**

![modalDisplayError](/assets/testing/images/modalDisplayError.jpg)
![modalDisplayError2](/assets/testing/images/modalDisplayError.2.jpg)

- Fix: changed below three functions to global and removed it from ```openModal()```:

```javascript
const backdropLabelContent = document.createElement("h6");
const modalBodyContent = document.createElement("div");
const modalFooterContent = document.createElement("div");
```

This fix not only removed the initial error of display not clearing before loading the next modal content, but also allowed the game to flow from task 1 to task 6 wihtout errors.

**5. Function ```resetStars``` is not completely functional.

Function is working appropriately to clear rewarded stars when the user progresses to the next level, however, when they complete the first task of the next level, all 6 stars are rewarded as opposed to just one: 

![starDisplayError](/assets/testing/images/starDisplayError.jpg)

-Fix: `resetStars()` given `sum = 0` allowed to reset stars correctly and display them appropriately: 

![starDisplay](/assets/testing/images/starDisplay.jpg)

#### Unsolved bugs


## Further testing
