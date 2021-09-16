const $optionA = $('#btn-1');
const $optionB = $('#btn-2');
const $optionC = $('#btn-3');
const $optionD = $('#btn-4');
const $mainQuestion = $('#current-question');
const $alertDisplay = $('.alertDisplay');

// Generate a welcome image

// Have a button that you lead you to start game

// Grab and display random question and multiple choice options

// Need a user event for when player clicks one of the four options

// Need a message when the answer is incorrect

// Need a message when the answer is correct


$.ajax( {
    url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
 }).then(
    (data) => {
      console.log(data.results)  
    },
    (error) => {
        console.log('bad request', error);
    }
 );

//  function diffAlerts() {
//     if ()
//  }