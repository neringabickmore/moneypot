# ![Logo](/wireframes/logo-image.jpg) #

# Money Pot - Testing Details #


Main [README.md](README.md) file.

View [website in GitHub](https://neringabickmore.github.io/MoneyPot/) Pages.

---

## Contents ##

- [Automated Testing](#automated-testing)
  - [Validation Services](#validation-services)
- [Client stories testing](#client-stories-testing)
- [Manual testing](#manual-testing)
  - [Testing undertaken on desktop](#testing-undertaken-on-desktop)
  - [Testing undertaken on tablet and phone devices](#testing-undertaken-on-tablet-and-phone-devices)
  - [Bugs discovered](#bugs-discovered)
    - [Solved bugs](#solved-bugs)
    - [Unsolved bugs](#unsolved-bugs)
- [Further testing](#further-testing)

*Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)*

---

## Automated Testing ##

### Validation Services ###

The following validation services and linter were used to check the validity of the website code:

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML.

![feedback.html validation](/wireframes/testing/images/feedback-html-validation.jpg) 
  
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.

![css validation](/wireframes/testing/images/css-validation.jpg) 

- [JSHint](https://jshint.com/) was used to validate JavaScript.

![JSHint validation](/wireframes/testing/images/jshint-validation.jpg)

- [Autoprefixer CSS online](https://autoprefixer.github.io/) was used to add vendor prefixes.

- [JSONLint](https://jsonlint.com/) was used to validate [game.json](assets\data\game.json) file.

![json validation](/wireframes/testing/images/json-validation.jpg)

## Client stories testing ##

 The following section goes through each of the user stories from the UX section of [README.md](https://github.com/neringabickmore/MoneyPot/blob/master/README.md)

1. As a  **user**, I want to find the rules how to play the game.

The user can find the rules of the game by clicking on the question mark icon in the game dashboard. When the user hover over the icon it's name is also displayed. 

![game dashboard](/wireframes/game-rules-pointer.png)
![rules of the game](/wireframes/game-rules.jpg)

2. As a **user**, I want to learn how to add numbers to get the correct sums.

The user has option to select any coin in the game console. If the sum is less than the price tag (at the top of the page), the user is allower to add more coins. When the user selects enough coins and the number in the sum field at the bottom of the console matches the number at the top (price tag), they are notified that they did well. If they choose the sum which is larger than the price tag, they are also notified with the message offering them to try again. Appropriate audio is played to enhance the experience. 

![interactive console](/wireframes/interactive-console.jpg)

3. As a **user**, I want to learn how to recognise British Currency coins.

In the rules of the game, which are aimed at the parent of the child, they are encouraged to show real coins to their child, who are essentially the users. As the game progresses, it becomes apparent that a particular colour and shape of coin is equal to a certain value. By repeatedly playing the game it should become a second nature to the user which coin has what value. 

4. As a **user**, I want to be able to contact the site owner for more information or suggest additional features.

Please note - the form is aimed for the adult user or should be submitted with a responsible adults consent. The site has an option for the user to contact the site owner via a feedback/contact form which is located at the footer of the page.

![feedback-form](/wireframes/contact-form.jpg)

5. As a **user**, I want to give feedback about the game using a questionaire.

The form has three basic questions the user is encouraged to answer. Please refer to the above image for details. 

6. As a **user**, I want to see attractive colours, large icons to play with and have fun!

The site has vivid colours of blue, yellow and red, large icons as well as audio interaction througout the game. 

---

## Manual testing ##

### Testing undertaken on Mobile ##

All steps below were followed repeatidly to test the game on Huawei P20, Samsung A50 and iPhone 8s. 

- Responsive design

  - The users on all above devices could clearly see game dashboard at the top of the screen. I have purposely implemented game display with the scrol option to allow more interation for the user. 
  - On all devices game console could easily fit without a scroll which was most important to me.
  - Coin buttons were large enough to be clicked on as well as the sum and price tags are at the right size for the user of the aimed aged. 
  - Footer remains static at the bottom of the page and gives the finishing touch to the page. 
  - I have confirmed that the font sizes are responsive on smaller screens.

- User friendly display

  - I have listened to feedback from various users in relation to the friendliness of the dislpay which as all positive.
  - The buttons were tested and are large enough to be clicked on and icons chosen are self explanatory.

- Interactive games console

  - The user has many buttons to keep them engaged: 

    - Coin buttons are tested and fully functional on all devices.
    - Modals are fully functioning to notify the user when they did well with the task.
    - Modals are fully functioning to notify the user when they need to try again.
    - Modals are fully functioning to notify the user when they did well in completing all the tasks and they are progressing to the next level of the game. 
    - Modal form are fully functioning to notify the user that they gave completed all of the levels and tasks and that they have won the game. 
    - Audio if fully functioning (except for iOS) at a click of the button or the appropriate.
    - The user is rewarded with a star eveyr time they complete the task correctly. At this stage, the white star (empty) turns to yellow. 
    - The user get all of the stars wiped out when they progress through the levels but are again rewarded with a yellow star upon completion of the task correctly. 
    - The user is also notified whith the change of the Task number and Level number to help them identify their progress.
    

  

- Dashboard for easy navigation

  - The user has many buttons to keep them engaged:
    - Game reset button - fully functional 
    - Sum reset button - fully functional 
    - Rules button - fully functional 
    - Sound on button - fully functional (except for iOS)
    - Sound off button - - fully functional (except for iOS)
    
- Social media links

  - Social media links are fully functional on all 

- Functional contact form

  - The contact form is fully functional on all devices (except for iOS where the form is not responsive). The users are notified when mandatory form fields which are name, email and consent form are not displayed.

### Testing undertaken on tablet and desktop ###

- Responsive design
- User friendly display
- Interactive games console
- Dashboard for easy navigation
- Social media links
- Functional contact form

### Bugs discovered ###

#### Solved bugs ####

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

  ![nextTaskError](/wireframes/testing/images/nextTaskError.jpg)

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

![nextTaskError](/wireframes/testing/images/nextTaskDisplayError.jpg)

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

![modalDisplayError](/wireframes/testing/images/modalDisplayError.jpg)

![modalDisplayError2](/wireframes/testing/images/modalDisplayError2.jpg)

- Fix: changed below three functions to global and removed it from ```openModal()```:

```javascript
const backdropLabelContent = document.createElement("h6");
const modalBodyContent = document.createElement("div");
const modalFooterContent = document.createElement("div");
```

This fix not only removed the initial error of display not clearing before loading the next modal content, but also allowed the game to flow from task 1 to task 6 wihtout errors.

**5. Function ```resetStars``` is not completely functional.

Function is working appropriately to clear rewarded stars when the user progresses to the next level, however, when they complete the first task of the next level, all 6 stars are rewarded as opposed to just one:

![starDisplayError](/wireframes/testing/images/starDisplayError.jpg)

-Fix: `resetStars()` given `sum = 0` allowed to reset stars correctly and display them appropriately:

![starDisplay](/wireframes/testing/images/starDisplay.jpg)

#### Unsolved bugs ####

1.  Audio does not work on iOS.
2.  Contact form does not work on iOS.
3.  The site is not opperational on Internet Explorer. 

## Further testing ##
