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
// This function will take in a word from user input and put each letter in to an array as an object
function newWord(userInput) {
    // create array from user input
    const userArray = Array.from(userInput);
    // create object array for each letter with parameters that we can use to identify the tiles around each letter
    const word = [];
    // loop each letter of string and map in array
    for (let i = 0; i < userArray.length; i++) {
        const letter = { letter: userArray[i], duplicate: false, up: false, down: false, left: false, right: false };
        // if first letter in word then left should be false
        if (i !== 0)
            letter.left = true;
        // if last letter in word then right should be false
        if (i !== (userArray.length - 1))
            letter.right = true;
        word.push(letter);
    }
    ;
    console.log(word);
}
;
newWord("FAMILY");
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
