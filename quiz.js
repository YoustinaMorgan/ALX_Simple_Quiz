function checkAnswer () {
    var correctAnswer = "4";

    var userAnswer = document.querySelector('input[name="quiz"]checked').value = "userAnswer";

    var feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.textcontent = "Correct! Well done."
    }else{
        feedback.textcontentt = "That's incorrect. Try again!"
    }
}
document.getElementById('submit-answer').addEventListener('click',checkAnswer);