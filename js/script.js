const $optionA = $("#btn-1");
const $optionB = $("#btn-2");
const $optionC = $("#btn-3");
const $optionD = $("#btn-4");
const $choices = $(".answerButtons");
const $mainQuestion = $("#current-question");
const $alertDisplay = $("#alert-text");

const correctAnswer = $optionD;

const questions = $.ajax({
  url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple",
}).then((triviaData) => {
  const promptQuestion = triviaData.results.map((triviaData) => {
    $mainQuestion.html(triviaData.question);
  });

  const optionsOnScreen = triviaData.results.map((triviaData) => {
    $optionA.html(triviaData.incorrect_answers[0]);
    $optionB.html(triviaData.incorrect_answers[1]);
    $optionC.html(triviaData.incorrect_answers[2]);
    $optionD.html(triviaData.correct_answer);
  });
});
(error) => {
  console.log("Oops something went wrong", error);
};

function clickEvent(evt) {
      if (evt === correctAnswer) {
    return $alertDisplay.text("Try again");
  } else {
    return $alertDisplay.text("That's correct!");
  }
}

$choices.on('click', clickEvent)