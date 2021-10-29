# Table of Contents

- [Table of Contents](#table-of-contents)
- [Project 2 - Javascript - Roshambo - Rock, Paper, Scissors Game](#javascript-roshambo-rock-paper-scissors-game)
- [UX](#ux)
    - [Strategy](#strategy)
    - [Scope](#scope)
    - [Structure](#structure)
    - [Skeleton](#skeleton)
    - [Surface](#surface)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)


# Javascript Roshambo Rock Paper Scissors Game

This interactive front-end website responds to the users' actions, allowing them to play the game of "Rock, Paper, Scissors" with the computer.

( This is as a milestone project for the Javascript module of the Full Stack Web Development Course at Code Institute. )


## Demo

To access live demo, click <a href="https://cezary-nakielski.github.io/Project-Two-Roshambo" target="_blank"> here. </a>


# UX

## Strategy

User's expectations:
* The website shall allow anyone to play the game of "Rock, Paper, Scissors".

Target Users:
* Anyone who wishes to play the game of "Rock, Paper, Scissors".

User Stories:
* As a visitor of the website, I want to play the game of "Rock, Paper, Scissors".


## Scope

### Content Requirements
* Three buttons - one denoting a rock, one denoting a piece of paper and one denoting a pair of scissors
* Area showing the choice made by the computer
* Area showing the score between the player and the computer
* A buttonn allowing the player to reset the score

### Functional Requirements
* Buttons allowing the player to make a choice between a rock, a piece of paper and a pair of scissors
* A button allowing the player to reset the score


## Structure

### Interaction Design

* The buttons allowing the player to choose between Rock, Paper and Scissors highlight the players choice, invoke computers choice and update the score.

* The reset button resets the score.

### Information Architecture

* All content presented on a single page, clearly visible to the user.


## Skeleton

### Navigation Design

* No navigation required

### Interface design

* Page layout is the same on all screen sizes

* Top Bar with the title of the game on top of the page

* Three buttons allowing the user to choose between (Rock, Paper, Scissors) options

* Area showing the score between the player and the computer

* Area showing computers choice

* Reset button allowing the player to reset the score

### Wireframes

Wireframes for the project can be found <a href="https://github.com/Cezary-Nakielski/Project-Two-Roshambo/blob/main/assets/wireframes/wireframes.pdf" target="_blank"> here. </a>


##  Surface

* Colours - Colours chosen so as to make all elements cleerly visible and grouped intuitively
* Typography - Henny Penny font by Brownfox Principal design from Google Fonts
* Elements/sections from top to bottom, left to right: Top Bar witht the title, three buttons for the players choise (Rock, Paper, Scissors), area showing the score, area showing the computers choice, reset button.


## Features

### Existing Features

- The buttons allowing the player to choose between Rock, Paper and Scissors highlight the players choice, invoke computers choice and update the score.

- The reset button resets the score.

### Features Left to Implement

- Optional animations to make the game more entertaining


## Technologies Used

- [HTML]
- [CSS]
- [Javascript]
- [Bootstrap]


## Testing

Manual Testing Implemented:

- Continuous testing with Chrome Development Tools during development:
    - Reviewing the look and "feel" of the web page
    - Testing responsiveness to changes in screen size

- Testing that all features work properly (on all screen sizes):
    - The buttons allowing the player to choose between Rock, Paper and Scissors upon being clicked on invoke computers choice and update the score.
    - The score is updated after each round.
    - The reset button resets the score.

- All text and elements are readible/visible on mobile, tablet and desktop screens and not obscured by colors.

Official W3C validator services have been used to check the validity of the code - HTML, CSS.

Esprima and JSHInt have been used to check the validity of the Javascript code.

Goals of the user presented earlier in the User Stories section of this README can be achieved by clicking on the interactive elements of the page.

- Tested using [Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly) - result: Mobile Friendly 
- Tested using [Webpagetest](https://www.webpagetest.org/) 


## Deployment

The project is hosted on GitHub Pages. The repository can be found <a href="https://cezary-nakielski.github.io/Project-Two-Roshambo" target="_blank"> here</a>. It is deployed from master branch the following way:
1. In the GitHub repository select Settings.
2. In the GitHub Pages section select main as a Source and save.

To run locally, type: git clone https://git@github.com:Cezary-Nakielski/Project-Two-Roshambo.git into your IDE terminal.


## Credits

### Acknowledgements

- I received inspiration for this project from lessons and materials provided by Code Institute, as well as my mentor and other students.

- [Google Fonts](https://fonts.google.com/)
    - The project uses fonts provided by Google Fonts.

- [Font Awesome](https://fontawesome.com/)
    - The project uses icons provided by Font Awasome.

- [sweetalert2](https://sweetalert2.github.io/)
    - The project uses code for alerts provided by sweetalert2.

- Information and ideas used in building this website were obtained from:
    - [www.w3schools.com/](https://www.w3schools.com/)
    - [www.stackoverflow.com](https://stackoverflow.com)
    - [www.developer.mozilla.org](https://developer.mozilla.org/en-US/)

- w3c Validator services:
    - [HTML](https://validator.w3.org/)
    - [CSS](https://jigsaw.w3.org/css-validator/)

- Javascript validator:
    - [Esprima](https://esprima.org/demo/validate.html)
    - [JSHint](https://jshint.com/)


* This website was made for educational purposes