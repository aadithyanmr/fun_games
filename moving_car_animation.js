const BUILDING_REPEAT = 5;

let _frameLine1 =  repeat(' _______                ', BUILDING_REPEAT);
let _frameLine2 =  repeat('/_▱__▱_/|____           ', BUILDING_REPEAT);
let _frameLine3 =  repeat('| ▦  ▦ ||___/|   ______ ', BUILDING_REPEAT);
let _frameLine4 =  repeat('| ▦  ▦ ||▪ _||__/_____/|', BUILDING_REPEAT);
let _frameLine5 =  repeat('| ▦  ▦ ||▪/_____/|▦  ▦||', BUILDING_REPEAT);
let _frameLine6 = repeat('| ▦  ▦ ||▪| ▦ ▦ ||▦  ▦||', BUILDING_REPEAT);

const starsLine = createRandomLine(120 * 30, '☆' + repeat(' ', 100));

let roadAndCar = '`ō͡≡≡o˞̶ ' + repeat('-', 115);
const DOT = '.';
const SPACE = ' ';
const ROAD = "-";
const EMPTYSTRING = '';
const cloud = '⋆｡°•☁';
const SCREEN_LENGTH = 126;
const delayValue = 6.5;
const stoppingPoint = 30;

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
  let slicedString = '';

  for (let index = from; index <= to; index++) {
    slicedString += string[index];
  }

  return slicedString;
}

function delay(delayValue) {
  for (let increment = 0; increment < delayValue ** 10; increment++);
}

function printNewLines(noOfTimes) {
  console.log(repeat('\n', noOfTimes));
}

function printClouds(screenLength) {
  const clouds = createRandomLine(screenLength, cloud + repeat(' ', 20));

  console.log(clouds);
}

function bringFirstCharToLast(string) {
  const endIndex = string.length - 1;
  const firstChar = string[0];
  const restOfTheString = slice(string, 1, endIndex);

  return restOfTheString + firstChar;
}

function bringLastCharToFirst(string) {
  const endIndex = string.length - 1;
  const lastChar = string[endIndex];
  const restOfTheString = slice(string, 0, endIndex - 1);

  return lastChar + restOfTheString;
}

function replace(string, char, index) {
  let replacedString = '';

  for (let increment = 0; increment < string.length; increment++) {
    const nextChar = increment === index ? char : string[increment];
    replacedString += nextChar;
  }

  return replacedString;
}

function makeLineMoveLeft(line) {
  const movingLine = bringFirstCharToLast(line);

  console.log(movingLine);
  return movingLine;
}

function makeLineMoveRight(line) {
  return bringLastCharToFirst(line);
}

function makeGroundFloor(line) {
  const moveGroundFloor = bringFirstCharToLast(line);

  console.log(repeat(moveGroundFloor + '\n', 4));
  return moveGroundFloor;
}

function printMovingBuildingsInFrame() {
  _frameLine1 = makeLineMoveLeft(_frameLine1);
  _frameLine2 = makeLineMoveLeft(_frameLine2);
  _frameLine3 = makeLineMoveLeft(_frameLine3);
  _frameLine4 = makeLineMoveLeft(_frameLine4);
  _frameLine5 = makeLineMoveLeft(_frameLine5);
  _frameLine6 = makeGroundFloor(_frameLine6);
}

function printStars() {
  console.log(starsLine);
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

function printStillBuilding() {
  console.log(_frameLine1);
  console.log(_frameLine2);
  console.log(_frameLine3);
  console.log(_frameLine4);
  console.log(_frameLine5);
  console.log(_frameLine6);
  console.log(_frameLine6);
  console.log(_frameLine6);
  console.log(_frameLine6 + '\n');
}

function runTheCar(roadWithCar) {
  roadAndCar = makeLineMoveRight(roadWithCar);

  console.log(roadAndCar);
}


function start(delayValue,screenLength) {
  loadingScreen();
  let index = 0;

  while (true) {
    console.clear();

    printStars();
    printClouds(screenLength);
    printClouds(screenLength);

    if (index < stoppingPoint) {
      printStillBuilding();
      runTheCar(roadAndCar);
    } else {
      printMovingBuildingsInFrame();
      console.log(roadAndCar);
    }
    
    index++;
    delay(delayValue);
  }
}

start(delayValue, SCREEN_LENGTH);
