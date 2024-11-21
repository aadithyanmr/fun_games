let score = 0;
const noOfQuestion = 10;

function EvaluateAnswer(answer, corctOptn) {
  if (answer === corctOptn) {
    score++;
    console.log('\n-------CORRECT ANSWER ✅-------\n')
  } else {
    console.log('\n-------WRONG ANSWER ❌-------\n');
    console.log('Correct answer is option "' + corctOptn + '"');
  }
}

function makeQuestionGetAnswer(qnNo, question, optn1, optn2, optn3, corctOptn) {
  const segment1 = '\n----Question number : ' + qnNo + '----\n';
  const segment2 = question;
  const segment3 = '\n1: ' + optn1 + '\n2: ' + optn2 + '\n3: ' + optn3 + '\n';

  console.log(segment1 + segment2 + segment3);

  const answer = prompt('select option');
  EvaluateAnswer(answer, corctOptn);
}

const isWilling = confirm('LETS PLAY QUIZZ....?');

if (isWilling) {
  let question = 'On which year india got independence ?';
  let op1 = '1946';
  let op2 = '1947';
  let op3 = '1974';
  let correctOption = '2';
  makeQuestionGetAnswer(1, question, op1, op2, op3, correctOption);
    
  question = 'Which animal is known as the "Ship of the Desert" ?';
  op1 = 'ostrich';
  op2 = 'elephant';
  op3 = 'camel';
  correctOption = '3';
  makeQuestionGetAnswer(2, question, op1, op2, op3, correctOption);

  question = 'Who is known as father of our nation ?';
  op1 = 'Jawaharlal Nehru';
  op2 = 'Mahatma Gandhi';
  op3 = 'Mohanlal';
  correctOption = '2';
  makeQuestionGetAnswer(3, question, op1, op2, op3, correctOption);

  question = 'What was the name of the first country to drop an atomic bomb ?';
  op1 = 'The United States';
  op2 = 'India';
  op3 = 'Japan';
  correctOption = '1';
  makeQuestionGetAnswer(4, question, op1, op2, op3, correctOption);

  question = 'What is the national fruit of India ?';
  op1 = 'Jack fruit';
  op2 = 'Apple';
  op3 = 'Mango';
  correctOption = '3';
  makeQuestionGetAnswer(5, question, op1, op2, op3, correctOption);

  question = 'What is the national river of India ?';
  op1 = 'Yamuna';
  op2 = 'Ganga';
  op3 = 'Kaveri';
  correctOption = '2';
  makeQuestionGetAnswer(6, question, op1, op2, op3, correctOption);

  question = 'What is the national flower of the United States?';
  op1 = 'Rose';
  op2 = 'Lily';
  op3 = 'Lotus';
  correctOption = '1';
  makeQuestionGetAnswer(7, question, op1, op2, op3, correctOption);

  question = 'What is the national bird of the United States ?';
  op1 = 'koel';
  op2 = 'Peacock';
  op3 = 'Bald Eagle';
  correctOption = '3';
  makeQuestionGetAnswer(8, question, op1, op2, op3, correctOption);

  question = 'What is the national fruit of the United States ?';
  op1 = 'Apple';
  op2 = 'Orange';
  op3 = 'Watermelon';
  correctOption = '1';
  makeQuestionGetAnswer(9, question, op1, op2, op3, correctOption);

  question = 'How many states are there in the United States ?';
  op1 = '50';
  op2 = '36';
  op3 = '67';
  correctOption = '1';
  makeQuestionGetAnswer(10, question, op1, op2, op3, correctOption);

  console.log('---🎉You scored ' + score + ' out of ' + noOfQuestion + '🎉---')
} else {
  console.log('YOU ARE NOT BRAVE ENOUGH😏');
}
