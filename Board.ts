const container = document.getElementById("container") as HTMLElement;
// User input for height and width
const height = 10;
const width = 10;

// Create grid based on user input

for (let i = 0; i < height; i++) {
  const div = document.createElement("div") as HTMLElement;
  for (let j = 0; j < width; j++) {
    const square = document.createElement("div") as HTMLElement;
    square.classList.add("square");
    container.appendChild(square);
  }
  container.append(div);
}

/* NOT SURE WHAT THIS DOES?

// Function to set grid size
function gridSize() {
  let size = document.getElementById("size").value;
  console.log(size);
  return size;
} */
