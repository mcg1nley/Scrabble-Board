"use strict";
// Create grid based on user input
const container = document.getElementById("container");
// User input for height and width
const height = 20;
const width = 20;
createGrid(height, width);
function createGrid(h, w) {
    for (let i = 0; i < h; i++) {
        const div = document.createElement("div");
        for (let j = 0; j < w; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("empty");
            container.appendChild(square);
        }
        container.append(div);
    }
}
// Get word from user input
// Put word in to an array of letters
// Assign each letter to a square and send back to display
// This function will take in a word from user input and put each letter in to an array as an object
function newWord(userInput) {
    var _a, _b;
    // Create array from user input
    const userArray = Array.from(userInput);
    // Create div element for overall word
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("word");
    // Needs to add an ID to this
    const wordId = userInput;
    wordDiv.setAttribute('id', wordId);
    document.body.appendChild(wordDiv);
    // Create object array for each letter with parameters that we can use to identify the tiles around each letter
    const word = [];
    // loop each letter of string and map in array
    for (let i = 0; i < userArray.length; i++) {
        const letter = { letter: userArray[i], duplicate: false, up: false, down: false, left: false, right: false };
        // Create Div element for each tile
        const letterDiv = document.createElement("div");
        letterDiv.classList.add("word-square", "empty");
        // Add ID to this div
        const squareId = userInput + "square";
        letterDiv.setAttribute('id', squareId);
        // Append letterDiv to wordDiv
        (_a = document.getElementById(wordId)) === null || _a === void 0 ? void 0 : _a.appendChild;
        // Create p element for letter 
        const letterHtml = document.createElement("p");
        // if first letter in word then left should be false
        if (i !== 0)
            letter.left = true;
        // if last letter in word then right should be false
        if (i !== (userArray.length - 1))
            letter.right = true;
        word.push(letter);
        letterHtml.innerText = word[i].letter;
        letterHtml.classList.add("letter");
        // Add id to this element
        const pId = userInput + "P";
        letterHtml.setAttribute('id', pId);
        // Add p element to letterDiv by Id
        (_b = document.getElementById(squareId)) === null || _b === void 0 ? void 0 : _b.appendChild;
    }
    ;
    //wordTiles(word);
    console.log(word);
}
;
// Recieves text input from user and sends to function
function returnText() {
    let input = document.getElementById("userInput").value.toUpperCase();
    newWord(input);
}
;
// Make tiles draggable
// I need the whole word to be draggable, but invididual letters need to line up with other squares
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}
function dragEnd() {
    this.className = 'fill';
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}
