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

#### Unsolved bugs

## Further testing
