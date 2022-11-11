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
function newWord(userInput: string) {
  let word: {letter: string, duplicate: boolean, up: boolean, down: boolean, left: boolean, right: boolean}[] = [];
  // loop each letter of string and map in array
  for(let i = 0; i < userInput.length; i++){
  word[i].letter = userInput[i]
  word[i].duplicate = false
  word[i].up = false
  word[i].down = false
  if(i = 0 ) {
    word[i].left = false
  }
  else {
    word[i].left = true
  }
  if(i = userInput.length) {
word[i].right = false
  }
  else {
    word[i].right = true
  }
  }
}


// Make tiles draggable
// I need the whole word to be draggable, but invididual letters need to line up with other squares

const fill = document.querySelector('.fill') as HTMLElement;
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart(this: HTMLElement) {
    this.className += ' hold'
    setTimeout (() => this.className = 'invisible', 0)
    
}

function dragEnd(this: HTMLElement) {
    this.className = 'fill'
}

function dragOver(e: any) {
    e.preventDefault()
}

function dragEnter(this: HTMLElement, e: any) {
    e.preventDefault()
    this.className += ' hovered'
}


function dragLeave(this: HTMLElement) {
    this.className = 'empty'
}

function dragDrop(this: HTMLElement) {
    this.className = 'empty'
    this.append(fill)
}






