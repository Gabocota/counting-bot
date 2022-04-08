const robot = require('robotjs');
const prompt = require("prompt-sync")();

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function exit(reason){
  console.log(reason);
  process.exit(1);
}

const initial = prompt("Number to start:");
const limit = prompt("Numbers to input:");
const delay = prompt("Delay (ms):");

let i = 0;

sleep(3000);

let pos = robot.getMousePos();
let inColor = robot.getPixelColor(pos.x, pos.y);
console.log('Initial color set to: "' + inColor + '"!')

while (i < limit){
  let color = robot.getPixelColor(pos.x, pos.y);
  if (color != inColor){
    exit("Probably cool down, wait like 30s")
  } else {
    let output = parseInt(i) + parseInt(initial);
    robot.typeStringDelayed(output)
    robot.keyTap("enter");
    console.log(output);
    i++;
    sleep(delay);
  }
}