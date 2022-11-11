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
// put this in a function
// Words should be an array of objects 
// Each object should be a letter
// duplicate checks when a letter crosses another word, up, down, left, right check surrounding tiles
function newWord(userInput) {
    let word = [];
    // loop each letter of string and map in array
    for (let i = 0; i < userInput.length; i++) {
        word[i].letter = userInput[i];
        word[i].duplicate = false;
        word[i].up = false;
        word[i].down = false;
        if (i = 0) {
            word[i].left = false;
        }
        else {
            word[i].left = true;
        }
        if (i = userInput.length) {
            word[i].right = false;
        }
        else {
            word[i].right = true;
        }
    }
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
