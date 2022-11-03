"use strict";
const container = document.getElementById("container");
// User input for height and width
const height = 25;
const width = 25;
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
// Create grid based on user input
