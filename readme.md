# StudySmart

### [ERD](https://lucid.app/lucidchart/e1d23b75-c25d-4681-91cd-c31ec40cab05/edit?beaconFlowId=408F2C67D29B6685&invitationId=inv_f7ef3cbb-b87a-4de1-9773-822efb27bdd5&page=0_0#)
## General Overview

### Home Page
This is the landing page with a brief (currently gibberish) Welcome and About section. 
<img src="https://i.imgur.com/ty9v1os.png">

### Login Page
Google Authenticate allows you to log-in or create an account.
<img src="https://i.imgur.com/kdB0rkS.png">

### Summary Page
Once logged in, the client is redirected to their summary page of all their decks and cards that are due to be studied for those decks. Clicking on an individual deck name will lead you to a page to begin a flashcards study session. 

On this page, you can create a deck or enter your database of all your flashcards for each deck. (Filtering functionality coming soon.)
<img src="https://i.imgur.com/qlTOdFG.png">

You can also edit the name of each deck with by clicking the edit icon in the table. 
#### New Deck Display

<img src="https://i.imgur.com/gYS7ySQ.png">


### Deck/Flashcard Page
Once redirected to a deck under study, you can create cards within that deck by clicking the "Add Card to Deck" button. 

The table again displays the cards that are due. 
<img src="https://i.imgur.com/XyFQc7I.png">

Clicking "Study Now" uses AJAX functionality to create a Single Page Application which will first show you the front of the card (the question). Then, when the user is ready to check their answer, clicking the "Reveal" button will then display the back of the card as well. 
<img src="https://i.imgur.com/U1aB9Vh.png">

Lastly, hitting any one of the below buttons will run functionality that determines where to then place the completed in your cue of cards that are due. 

<img src="https://i.imgur.com/eFMEuMT.png">
After completing your study session (when the number of Due Cards reaches 0), a prompt is displayed which indicates that the user has finished studying their deck!

<img src="https://i.imgur.com/PHEGXl1.png">

Within this page, the client can create a new card for the deck they are currently in. 

### New Card Page
<img src="https://i.imgur.com/FjwcwzV.png">

### Index Page
This page shows all the decks and all the cards you have created and placed them inside a table. 

<img src="https://i.imgur.com/oPXKffZ.png">

The edit icon will allow the client to edit any flashcard that they have created. 

### Edit Card Page
<img src="https://i.imgur.com/C0WK9S1.png">

### About the Project

This project was completed in 7 days. It is a flashcard system that allows users to recreate this popular studying method online. It follows the principles of spaced repetition 

### Technologies
JavaScript
Express
Mongoose
MongoDB
AJAX

### Icebox
- AAU, I'd want to be able to edit which deck a flashcard belongs in
- Web API for copy & pasting text that keeps its formatting
- Web API to show stats of reviewed cards across time
- Web API to notify user's Google Calendar or other reminders to study
- Synced to mobile device!
- Should be able to paste in an image
- Should be able to hit a "Hint" button to display pop-up on page
- Have a public vs private database - public decks can be shared and copied into a user's account
- AAU, I'd want a prompt to confirm any updates/deletes when selecting button

