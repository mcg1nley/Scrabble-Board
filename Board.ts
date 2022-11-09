// Create grid based on user input

const container = document.getElementById("container") as HTMLElement;
// User input for height and width
const height: number = 20;
const width: number = 20;

createGrid(height, width);

function createGrid(h: number, w: number) {
  for (let i: number = 0; i < h; i++) {
    const div = document.createElement("div") as HTMLElement;
    for (let j: number = 0; j < w; j++) {
      const square = document.createElement("div") as HTMLElement;
      square.classList.add("square");
      container.appendChild(square);
    }
    container.append(div);
  }

}

// Make tiles draggable






