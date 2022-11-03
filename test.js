const container = document.getElementById("container");
// User input buttons
const buttonRed = document.getElementById("red");
const buttonBlue = document.getElementById("blue");
const buttonGreen = document.getElementById("green");
const buttonGrey = document.getElementById("grey");
const buttonRandom = document.getElementById("random");

// Coresponding color arrays to user input above
const colorArrayRed = ["#ffbaba", "#ff7b7b", "#ff5252", "#ff0000", "#a70000"];
const colorArrayBlue = ["#2a99ff", "#388ae5", "#1c6fba", "#3169a7", "#264a87"];
const colorArrayGreen = ["#64b21b", "#5e9a24", "#50851e", "#46741c", "#365a14"];
const colorArrayGrey = ["#a5a5a5", "#838383", "#6b6b6b", "#545454", "#454545"];
let colorArrayRandom = [];

// Set to random colors as default
fillArrayWithRandomColors();
let userOption = colorArrayRandom;

let SQUARES = 500; /* Consider making this grid via user input. Ask user how big they want the grid and square this */
/* This next const could be reinstated if i want to have more than 5 colors in an array, it would be used in the fillArrayWithRandomColors() function below */
/* const numberRange = 6; */

// Event listeners to see which color palette has been selected.
buttonRed.addEventListener("click", () => {
  if (userOption != colorArrayRed) {
    userOption = colorArrayRed;
  }
});

buttonBlue.addEventListener("click", () => {
  if (userOption != colorArrayBlue) {
    userOption = colorArrayBlue;
  }
});

buttonGreen.addEventListener("click", () => {
  if (userOption != colorArrayGreen) {
    userOption = colorArrayGreen;
  }
});
buttonGrey.addEventListener("click", () => {
  if (userOption != colorArrayGrey) {
    userOption = colorArrayGrey;
  }
});

buttonRandom.addEventListener("click", () => {
  fillArrayWithRandomColors();
  userOption = colorArrayRandom;
  colorArrayRandom = [];
});

// Create grid
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  // Create/Remove color on hover
  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

// Set color of current square
function setColor(element) {
  const color = getRandomColorFromArray();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = `#1d1d1d`;
  element.style.boxShadow = `0 0 2px #000`;
}

// Function to pass a random color to the setColor function. Color comes from the selection user has made.
function getRandomColorFromArray() {
  return userOption[Math.floor(Math.random() * userOption.length)];
}

// Function to fill the colorArrayRandom
function fillArrayWithRandomColors() {
  for (i = 0; i < 5 /* numberRange */; i++) {
    let hexCode = "#";
    while (hexCode.length < 7) {
      hexCode += Math.round(Math.random() * 15).toString(16);
    }
    colorArrayRandom.push(hexCode);
  }
}

// Function to set grid size
function gridSize() {
  let size = document.getElementById("size").value;
  console.log(size);
  return size;
}
