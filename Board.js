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
    // Create array from user input
    const userArray = Array.from(userInput);
    // Create div element for overall word
    const wordDiv = document.createElement("div");
    wordDiv.classList.add("word");
    // Needs to add an ID to this
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
        //letterDiv.setAttribute('id',  )
        // Append letterDiv to wordDiv
        //document.getElementById()
        // Create p element for letter 
        const letterHTML = document.createElement("p");
        // if first letter in word then left should be false
        if (i !== 0)
            letter.left = true;
        // if last letter in word then right should be false
        if (i !== (userArray.length - 1))
            letter.right = true;
        word.push(letter);
        letterHTML.innerText = word[i].letter;
        letterHTML.classList.add("letter");
        // Add p element to letterDiv by Id
        //document.getElementById()
    }
    ;
    //wordTiles(word);
    console.log(word);
}
;
/*
// CREATE WORD TILE - THIS HAS BEEN MIXED WITH newWord function
function wordTiles(word: {letter: string, duplicate: boolean, up: boolean, down: boolean, left: boolean, right: boolean}[]) {
  // for every letter in array create a new tile with the content being the letter
  for (let i = 0; i < word.length; i++) {
    const para = document.createElement("p") as HTMLElement;
para.innerText = word[i].letter
para.classList.add("word-square", "letter")
document.body.appendChild(para)
  }

} */
// Recieves text input from user and sends to function
function returnText() {
    let input = document.getElementById("userInput").value.toUpperCase();
    newWord(input);
}
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
