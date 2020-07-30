# Money Pot # 

*[Money Pot](https://neringabickmore.github.io/MoneyPot/) is a maths game designed for children age 4-6. By playing the game, they will learn how to add simple sums and how to recognise pence coins in British Currency.*

![Game display on different screens](/wireframes/testing/images/game-display-screens.jpg)

Since the Global Covid pandemic has started, my husband and I were one of those parents who had to roll up our sleeves and become stay-at-home teachers for our son Jacob (5). This game was inspired by one of the homeschooling tasks to teach our son the value of the British Currency coins as we played *shopkeepers* selling and buying his toys and groceries, by giving correct change. 

---

## Contents ##

- [UX (User Experience)](#ux-user-experience)
  - [Project Goals](#project-goals)
  - [User Goals](#user-goals)
  - [User Stories](#user-stories)
  - [Site Owner Goals](#site-owner-goals)
  - [User Requirements and Expectations](#user-requirements-and-expectations)
  - [Design Choices](#design-choices)
    - [Fonts](#fonts)
    - [Colours](#colours)
    - [Wireframes](#wireframes)
- [Technologies](#technologies)
  - [Languages](#languages)
  - [Libraries](#libraries)
  - [Tools](#tools)
- [Features](#features)
  - [Features Implemented](#features-implemented)
  - [Future Features](#future-features)
  - [Considered Features](#considered-features)
- [Testing](#testing)
- [Deployment](#deployment)
  - [Running Money Pot Locally](#running-money-pot-locally)
- [Credits](#credits)
  - [Audio](#audio)
  - [Images](#images)
  - [Colour](#colour)
  - [Image editing](#image-editing)
  - [Code Ideas](#code-ideas)
- [Acknowledgements](#acknowledgements)

*Table of contents generated with [markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)*

---

## UX (User Experience) ##

### Project Goals ###

The **goal** of this project is to build an interactive maths game for **children** age 4-6.
The secondary goal of this project is to teach children to identify British Currency pence coins.

### User Goals ###

- **Find the rules** how to play the game.
- **Play** the game.
- **Learn** to identify British Currency coins.
- **Learn** simple math sums.
- **Give feedback** about the game. 
- **Contact** to the site owner.

### User Stories ###

- As a  **user**, I want to find the rules on how to play the game.
- As a **user**, I want to learn how to add numbers to get the correct sums.
- As a **user**, I want to learn how to recognise British Currency coins.
- As a **user**, I want to be able to contact the site owner for more information or suggest additional features.
- As a **user**, I want to give feedback about the game using a questionnaire.
- As a **user**, I want to see attractive colours, large icons to play with, and have fun!

### Site Owner Goals ###

- As a **site owner**, I want to create an interactive educational maths game for children.
 As a **site owner**, I want to make sure that children have fun and don't get bored too quickly.
- As a **site owner**, I also want to teach the children a life skill how to count money, by starting small with pence coins.
- It is also important to me to receive honest feedback from the parent of the **user** so I can identify how I can improve the game and for recommendations on other educational games their children would benefit from.
- As a **site owner**, I would also like my audience to connect with me on social media platforms.

### User Requirements and Expectations ###

1. The site should have:
   - Game console.
   - Navigation to *information* about the game, including how to play it.
   - Navigation to *contact us* with a fully functioning form.
   - Audio with buttons to turn *audio on/off*.
   - Button to *reset the game*.
   - Button to *reset the sum*.
2. The site should be **visually appealing** and **interactive**.
3. The game should have **three levels** and **six tasks** in each level.
4. **Price tag** should be displayed and change its value on a new task at each level. It should also increase in value on each task.
5. **Level 1** should have **6 coins** displayed to start with and coins should be buttons.
6. Additional coins should be displayed at **level 2 and level 3** to add difficulty.
7. The coin should add it's value to the total sum amount when clicked on.
8. The total sum amount should be displayed and it should increase it's value every time a coin button is clicked on.
9. Games console should have six stars displayed, which are highlighted in yellow when the correct sum is achieved. Stars colour should reset back to white at each level.
10. With each correct sum, a pop up *Congrats* message display appears. The display should have a button to take the user to the next task.
11. At each incorrect sum, a pop up *Try again* message display appears. The display should have a button to restart the same task and will trigger the sum reset to 0. The user will not lose the stars they have already won.
12. At each correct completion of the 6 task, *Next level* message display appears. The display should have a button to take the user to the next level task one, trigger the sum reset to 0, all-stars reset to white colour and an additional coin is displayed. 

### Design Choices ###

The main aim of the design of the site is to make it appealing to the children. It should have multiple colours, the buttons should be large and the font size is increased where appropriate.

#### Fonts ####

For the **logo**, I have chosen [Finger Paint](https://fonts.google.com/specimen/Finger+Paint?query=finger). This font seemed to me a close resemblance of a child's writing with a paint brush.

For the **level**, **task**, **price tag** and **sum** I have chosen [Love Ya Like A Sister](https://fonts.google.com/specimen/Love+Ya+Like+A+Sister?query=love+ya) font. This font seems playful to me. I also liked the fact that there is some transparancy and you can see a bit of the background colour.

For all **headers** I used [Noto Sans JP](https://fonts.google.com/specimen/Noto+Sans+JP?query=noto) font and all **other text** [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto).

#### Colours ####

I chose the colours that I felt are quite strong and impactfull yet not *"screaming"*.
![Colour palette](/wireframes/colour-palette.png)

- *Gold Metalic* (#D5AE41) used for the **Logo**, to highlight **stars**, **price tag** and **footer**
- For the **nav buttons** used *Madder Lake* (#BD3D3A) , which on hover changes to *Cordovan* (#994044)
- For the **coin background** used *Madder Lake* (#BD3D3A)
- *Ghost White* (#F3F6FB) mainly used for **non-highlighted stars**, **text** and **background colour**
- *Queeen Blue* (#3F69AA) used for **console dashboard**, **sum display**, **information** and **contact form**
  
#### Wireframes ####

I designed my site moc-ups using [balsamiq wireframes](https://balsamiq.com/). I was focusing on defining the basic layout structure of the game console and identifying how displays would change on different screen sizes such as [mobile](/wireframes/wireframe.mobile.jpg), [tablet](/wireframes/wireframe.tablet.jpg) and [desktop](/wireframes/wireframe.desktop.jpg).

I have also included additional wireframes for the [contact form](/wireframes/wireframe.contact.jpg) page, [information](/wireframes/wireframe.info.jpg), [winner](/wireframes/wireframe.winner.jpg), [error](/wireframes/wireframe.error.jpg) and [congrats](/wireframes/wireframe.congrats.jpg) modal displays. Please note that all of these display layouts will remain the same on all screen sizes.

To make game development easier, I have created [workflow-chart](/wireframes/js-workflow.png).

In the **form page** the **envelope** icon in the footer is replaced with **games console** icon, which on-click brings the user back to the **games page**. On submission of the form, the user is also brought back to the games page.

---  

## Technologies ##

### Languages ###

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Libraries ###

- [jQuery](https://jquery.com/)
- [Popper](https://popper.js.org/)
- [Bootstrap](https://getbootstrap.com/)
  
### Tools ###

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Font-Awesome](https://fontawesome.com/icons?d=gallery)
- [Google fonts](https://fonts.google.com/)
- [Color editor](https://coolors.co/)
- [Image editor](https://www.birme.net/)

---

## Features ##

### Features Implemented ###

- Responsive design

The game has different layout options, focused on mobile-first design in mind as more users are expected to use mobile or tablet devices than desktop.

![site views on different displays](/wireframes/responsive-design.jpg)

- User-friendly display

The display has bright colours, large fonts, and large buttons as aimed for very young children. The social media icons are a lot smaller at the footer and purposely are not at the focus of the display, aimed at adult interaction instead.

- Interactive games console

When the user interacts with the coin buttons, they get feedback on how well they are doing. 

![interactive games console](/wireframes/interactive-console.jpg)

- Dashboard for easy navigation

On the left side of the screen, you can see a dashboard allowing the user to reset the game completely, reset the sum, find rules of the game as well as switch the audio on/off.

![dashboad-on-the-left](/wireframes/game-dashboard.jpg)

- Rules of the game

![rules](/wireframes/game-rules.jpg)

- Social media links

The site has social media links displayed at the footer of the page, as well as a button to take them to the contact/feedback form.

![social-media](/wireframes/social-media.jpg)

- Functional contact form

The form prompts the user if they haven't completed mandatory tasks of the form, such as their name, email address, and a consent confirmation. Upon submission of the form, the user gets a notification when their form is sent, which also includes their name. 

![contact-form](/wireframes/contact-form.jpg) 

### Future Features ###

- Currency switch (i.e. Euro and US Dollar options).
- Information in a different language (i.e. Lithuanian as I have nieces and nephew living in Lithuania).
- Increase levels of difficulty and include higher value currency (Pound coins and notes).
- Coins switch display places throughout the tasks and levels of the game to make it more challenging.
- User form submissions are delivered to the site owners inbox with its contents. 

### Considered Features ###

I find it's important to explain a few features I have considered and why I have decided against implementing them in this project.

- Background music

This game is educational and the target audience is very young. They are easily distracted and I find that continuous background audio would challenge their ability to focus. 

- Questionnaire in the contact form is not mandatory

  The questionaire part of the contact form is optional for a reason. The form plays a dual role: 

  - To give feedback.
  - To contact us for any other reasons. 

  Not all of the users would want to provide feedback and yet I still want to hear from them.

- Users do not have an option to choose levels or tasks of the game

  On average, it takes my son between 10 to 15 min to complete the game. It only has 3 levels and 3 tasks on each level. Repetition allows the user to learn quicker. The idea is for the user to repeat the game from start to finish every time as it's quick to complete and they are exposed to different levels of difficulty throughout the game.

  Should the game develop and more levels are added with more complexity I may reconsider this option.

- Coin clicks are unlimited

  In the rules of the game, I encourage parents to be involved with their children while they play the game. One of the recommendations I have is for them to encourage their children to use a variety of coins every time they play. The purpose of the game is not how quickly they can get to the sum, but for them to be able to apply almost real-life scenarios and collect the right amount of change that they have as if they are in a shop trying to buy a toy. In real life scenario, we will not always have 20p, 50p, and 5p to give an exact change of 75p.  By limiting the clicks I would remove that part of learning. 

- No special reward for using as few coin clicks possible to achieve the correct sum

  The purpose of the game is to achieve the correct sum clicking on a variety of the coins every time the user plays the game. Rewarding the user for using as little coin clicks possible removed an important part of learning. 

---

## Testing ##

Testing information can be found in a separate [testing.md](testing.md) file.

---

## Deployment ##

The website was developed on *Visual Studio Code* and using *Git* pushed to *GitHub*, which hosts the repository. I made the following steps to deploy the site using *GitHub Pages*:

- Opened up **GitHub** in the browser.
- Signed in with my **username** and **password**.
- Selected my **repositories**.
- Navigated to **neringabickmore/MoneyPot**.
- In the top navigation clicked **settings**.
- Scrolled down to the **GitHub Pages** area.
- Selected **Master Branch** from the **Source** dropdown menu.
- Clicked to **confirm** my **selection**.
- [Money Pot](https://neringabickmore.github.io/MoneyPot/) is now **live** on **GitHub Pages**.

### Running Money Pot Locally ###

Cloning Money Pot from GitHub:

- Navigate to **neringabickmore/MoneyPot**.
- Click the green **Clone or Download** button.
- **Copy** the url in the dropdown box.
- Using your favourite **IDE** open up your preferred terminal.
- **Navigate** to your desired file location.

Copy the following code and input it into your terminal to clone Money Pot:

```git clone https://github.com/neringabickmore.MoneyPot```

---

## Credits ##

### Audio ###

All audio found on [Free Sound](https://freesound.org/) website:

### Images ###

You can find the images of the coins used for the site [here](/assets/images). I have sourced them through various websites, which are free to use:

- [Clipart-library](http://clipart-library.com)
- [FAVPNG](https://favpng.com)
- [iStock](https://www.istockphoto.com)
- [flickr](https://www.flickr.com)

### Colour ###

I have identified the colour palette on [W3](https://www.w3schools.com/)

### Image editing ###

- I have used the snippet tool for capturing screengrabs which I saved as images.
- MS Paint 3D to give the same background colour for the coin images as the button.
- A handy [Birme](https://www.birme.net/?target_width=300&target_height=300&quality=100&border_width=1&border_color=%23bd3d3a) site allowed me to resize the images all at once.

### Code ideas ###

- I have borrowed audio button ideas from [PicFlip!](https://github.com/AJGreaves/picflip) game.

---

## Acknowledgements ##

I would like to recognize the people who have helped me through this project: 

- My mentor Simen Daehlin for his time, patience, and support in helping me to understand Java Script, which I have truly struggled with but with his help I was able to push through. 

- Code Institute tutors Tim, Stephen, and Samantha who have helped me with technical struggles and made me think outside the box to solve my  Java Script problems.

- My fellow Code Institute slack community, especially Simon Castagna and alumni Bim Williams for listening to my struggles and pushing me forward.

- My son Jacob (5) and his friends Christina (5), Isaac (5), Lennie (6), and Lorrie (5) for testing this game and their invaluable feedback on how I can make it a bit more fun. 
