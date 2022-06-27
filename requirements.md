# Software Requirements

## Vision

This website is being designed to include a small collection web games.  The games will be simple but offer some replay value in the way of user score tracking.  The goal is to provide entertainment to the user.

## Scope (in/out)

**IN:**
* This web app will include an 'about us' page to familiarize the audience with our team.
* Users will be able to play a reflex-oriented game
* Users will also be able to solve a crossword puzzle
* The top three scores will be tracked locally and listed on the home page

**OUT:**
* We will not be providing top scores for anything beyond local usage.

## Minimum Viable Product (MVP)

Our MVP functionality would be the completion of tracking user score and the capability to play the reflex game.

Our stretch goal is to implement a randomized word selection for the crossword, add increased difficulties for the reflex game, as well as creating other small games.

## Functional Requirements

1. User will be able to submit guesses to crossword puzzle. Correct answers will be rendered in appropriate boxes.

...


### Data Flow

User will enter at the main page and be greeted by pictures of the available games.  Upon clicking one, they will be taken to the respective game page.

In the case of the reflex game, there will be a start button and a short set of instructions.  Users will enter their name and play until the game ends. Their score will be tallied through successful clicks on the boxes that randomly appear on the screen.  They may choose to play again or return to the home page.  Their score and name data will be saved on local storage and rendered to the high score list on the home page.

The crossword puzzle will have a submit form that takes their answers and renders correct guesses into the boxes in the columns and rows displayed in the game field.  Score will be logged upon successful guesses and will also transfer over to the main page for display.
