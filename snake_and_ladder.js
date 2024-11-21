const snakeMessage = 'you got bit by a snake 🐍';
const ladderMessage = 'you climbed a ladder 🪜';

function rollDice() {
  return Math.ceil(Math.random() * 6);
}

function getNewScoreIfSnakePresent(score) {
  switch(score) {
    case 99: {
      return 23;
    }

    case 81: {
      return 23;
    }

    case 69: {
      return 9;
    }

    default: {
      return score;
    }
  }
}

function getNewScoreIfLadderPresent(score) {
  switch(score) {
    case 2: {
      return 70;
    }

    case 27: {
      return 72;
    }

    case 69: {
      return 93;
    }

    default: {
      return score;
    }
  }
}

function getNewScoreIfSnakeOrLadderPresent(score) {
  let newScore = getNewScoreIfSnakePresent(score);

  if (score != newScore) {
    return newScore;
  }

  newScore = getNewScoreIfLadderPresent(score);

  if (score != newScore) {
    return newScore;
  }

  return score;
}

function printWelcome() {
  console.log('\n"Do not begin unless you intend to finish"');
  console.log('\n---welcome to my snake and ladder---\n');
}

function getPlayerName(player) {
  const name = prompt('Whats your name ' + player + ' ?');

  return name;
}

function printFeedback(player, rolledNumber, newScore) {
  prompt('Its ' + player + "'s turn, press enter to roll dice")
  console.log(player + ' rolled ' + rolledNumber + ' and scored ' + newScore);
}

function getNewScore(score, rolledNumber, winningScore) {
  const sumOfScores = score + rolledNumber;
  const newScore = sumOfScores > winningScore ? score : sumOfScores;
  const changedScore = getNewScoreIfSnakeOrLadderPresent(newScore);

  return changedScore;
}

function interactWithUser(player, score, winningScore) {
  const rolledNumber = rollDice();
  const newScore = getNewScore(score, rolledNumber, winningScore);

  printFeedback(player, rolledNumber, newScore);

  return newScore;
}

function game(player1Name, player2Name, winningScore) {
  let player1Score = 0;
  let player2Score = 0;

  while (player2Score < winningScore) {
    player1Score = interactWithUser(player1Name, player1Score, winningScore);

    if (player1Score === winningScore) {
      return player1Name;
    }

    player2Score = interactWithUser(player2Name, player2Score, winningScore);
  }

  return player2Name;
}

function startGame(winningScore) {
  printWelcome();

  const player1Name = getPlayerName('player1');
  const player2Name = getPlayerName('player2');
  const winner = game(player1Name, player2Name, winningScore);

  console.log(winner + ' WON THE GAME')
}

startGame(100);
