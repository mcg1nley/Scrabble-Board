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
            container.appendChild(square);
        }
        container.append(div);
    }
}
// Make tiles draggable
