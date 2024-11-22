function printWelcome() {
  console.log('\n"Do not begin unless you intend to finish"');
  console.log('\n---welcome to my snake and ladder---\n');
}

function readPlayerName(player) {
  const name = prompt('Whats your name ' + player + ' ?');

  if(name === '') {
    return player;
  }

  return name;
}

function readInput(player) {
  prompt('\nIts ' + player + "'s turn, press enter to roll dice")
}

function showScoreUpdate(player, Score) {
  console.log('---' + player + "'s score is now " + Score);
}

function showRolledValue(player, rolledNumber) {
  console.log('\n' + player + ' rolled ' + rolledNumber);
}

function showObstacleMessage(obstacle) {
  console.log('You stepped on a ' + obstacle);
}

function congratulateWinner(winner) {
  console.log('CONGRATULATIONS ' + winner + ' WON');
}

function rollDice() {
  const randomDecimal = Math.random();
  const randomDecimalInRange = randomDecimal * 6;

  return Math.ceil(randomDecimalInRange);
}

function getSnakeEndIfSnakePresent(score) {
  switch (score) {
    case 99:
      return 23;

    case 81:
      return 23;

    case 69:
      return 9;

    default:
      return score;
  }
}

function getLadderTopIfLadderPresent(score) {
  switch (score) {
    case 2:
      return 70;

    case 27:
      return 72;

    case 69:
      return 93;

    default:
      return score;

  }
}

function getNewScoreIfSnakeOrLadder(score) {
  const newScore = getSnakeEndIfSnakePresent(score);

  return getLadderTopIfLadderPresent(newScore);
}

function getNewScoreIfObstaclePresent(score) {
  const newScore = getNewScoreIfSnakeOrLadder(score); // big name

  if (newScore > score) {
    showObstacleMessage('ladder🪜');
  }

  if (newScore < score) {
    showObstacleMessage('snake🐍');
  }

  return newScore;
}



function getNewScore(player, score, winningScore) {
  readInput(player);
  const rolledNumber = rollDice();
  showRolledValue(player,rolledNumber);

  const sum = score + rolledNumber;
  let newScore = sum > winningScore ? score : sum;
  const changedScore = getNewScoreIfObstaclePresent(newScore);

  showScoreUpdate(player, changedScore)

  return changedScore;
}

function game(winningScore) {
  let player1Score = 0;
  let player2Score = 0;

  const player1Name = readPlayerName('player1');
  const player2Name = readPlayerName('player2');

  while (player2Score < winningScore) {
    player1Score = getNewScore(player1Name, player1Score, winningScore);

    if (player1Score === winningScore) {
      return player1Name;
    }

    player2Score = getNewScore(player2Name, player2Score, winningScore);
  }

  return player2Name;
}

function startGame(winningScore) {
  printWelcome();
  const winner = game(winningScore);

  congratulateWinner(winner);
}

startGame(100);
