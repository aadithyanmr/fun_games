const CAR = '`ō͡≡≡o˞̶ ';
const DOT = '.';
const SPACE = ' ';
const ROAD = "-~-------~~";
const EMPTYSTRING = '';
const cloud = '⋆｡°•☁';
const SCREEN_LENGTH = 126;
const delayValue = 7;

function randomNumber(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

function repeat(char, noOfTimes) {
  let string = '';

  for (let increment = 0; increment < noOfTimes; increment++) {
    string += char;
  }

  return string;
}

function slice(string, from, to) {
  if (from > to) {
    return EMPTYSTRING;
  }

  return string[from] + slice(string, from + 1, to);
}

function delay(delayValue) {
  for (let increment = 0; increment < delayValue ** 10; increment++);
}

function printNewLines(noOfTimes) {
  console.log(repeat('\n', noOfTimes));
}

function printClouds() {
  const clouds = createRandomLine(SCREEN_LENGTH, cloud + repeat(' ', 20));

  console.log(clouds);
}

function printMovingCar(stringBeforeCar, car, stringAfterCar) {
  const track = stringBeforeCar + car + stringAfterCar;

  console.log(track);
}

function printTrack(stringBeforeCar, car, stringAfterCar) {
  console.clear();

  printNewLines(30);
  printClouds();
  printClouds();
  printNewLines(1);

  printMovingCar(stringBeforeCar, car, stringAfterCar);
}

function getrandomChar(string) {
  const randomNum = randomNumber(0, string.length);

  return string[randomNum];
}

function createRandomLine(length, characterString) {
  let randomLine = '';

  for (let increment = 0; increment <= length; increment++) {
    const randomChar = getrandomChar(characterString);
    randomLine += randomChar;
  }

  return randomLine;
}

function loadingScreen() {
  let loadingText = repeat(' ', 55) + '𝓵𝓸𝓪𝓭𝓲𝓷𝓰';

  for (let increment = 0; increment <= 2; increment++) {
    console.clear();

    loadingText = loadingText + SPACE + DOT;

    printNewLines(20);
    console.log(loadingText);

    delay(8);
  }
}

function start(car, delayValue, road, roadLength) {
  loadingScreen();

  let endOfStringBeforeCar = 0;
  const randomRoad = createRandomLine(roadLength, road);

  while (endOfStringBeforeCar < randomRoad.length) {
    const startOfStringAfterCar = endOfStringBeforeCar + CAR.length - 1;
    const endOfStringAfterCar = roadLength - 1;

    const stringBeforeCar = slice(randomRoad, 0, endOfStringBeforeCar);
    const stringAfterCar = slice(randomRoad, startOfStringAfterCar, endOfStringAfterCar);

    printTrack(stringBeforeCar, car, stringAfterCar);
    delay(delayValue);

    endOfStringBeforeCar++;

    if (endOfStringBeforeCar === randomRoad.length - CAR.length) {
      endOfStringBeforeCar = 0;
    }
  }
}

start(CAR, delayValue, ROAD, SCREEN_LENGTH);
