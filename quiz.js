function answer() {
  //document.formName.inputName.value
  var question1 = document.quiz.q1.value;
  var question2 = document.quiz.q2.value;
  var question3 = document.quiz.q3.value;
  var question4 = document.quiz.q4.value;
  var question5 = document.quiz.q5.value;
  var question6 = document.quiz.q6.value;
  var question7 = document.quiz.q7.value;
  var question8 = document.quiz.q8.value;
  var question9 = document.quiz.q9.value;
  var question10 = document.quiz.q10.value;

  var correctAns = 0;

  if (question1 == "1a") {
    correctAns++;
  }
  if (question2 == "2c") {
    correctAns++;
  }
  if (question3 == "3d") {
    correctAns++;
  }
  if (question4 == "4b") {
    correctAns++;
  }
  if (question5 == "5b") {
    correctAns++;
  }
  if (question6 == "6a") {
    correctAns++;
  }
  if (question7 == "7b") {
    correctAns++;
  }
  if (question8 == "8a") {
    correctAns++;
  }
  if (question9 == "9d") {
    correctAns++;
  }
  if (question10 == "10a") {
    correctAns++;
  }

  var totalScore = 10;
  var grade = (correctAns / totalScore) * 100;
  var message = [
    "<div style='text-align: center; font-size: 60px; color: green; margin-top: 100px; font-weight: bold;'>You Passed</div>",
    "<div style='text-align: center; font-size: 60px; color: red; margin-top: 100px; font-weight: bold;'>You Failed</div>",
  ];
  var dept;

  if (grade > 50) {
    dept = 0;
  } else {
    dept = 1;
  }

  //   document.getElementById("result").innerHTML =
  //     "you got " + correctAns + " questions correct.";

  //   document.getElementById("msg").innerHTML = message[dept];

  //   Another page
  document.write("<div style='margin-top: 300px;'></div>");
  document.write(
    "<div style='font-size: 30px; text-align: center;'>you got " +
      correctAns +
      " questions correct.<div>"
  );
  document.write("<br><br>");
  document.write(message[dept]);
}
