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
// Function gets word from input and sends to newWord function - possibly combine these two


// This function will take in a word from user input and put each letter in to an array as an object
function newWord(userInput: string) {
  // create array from user input
const userArray: string[] = Array.from(userInput);
// create object array for each letter with parameters that we can use to identify the tiles around each letter
  const word: {letter: string, duplicate: boolean, up: boolean, down: boolean, left: boolean, right: boolean}[] = [];
  // loop each letter of string and map in array
  for(let i = 0; i < userArray.length; i++){
    const letter = {letter: userArray[i], duplicate: false, up: false, down: false, left: false, right: false}
    // if first letter in word then left should be false
    if (i !== 0 ) letter.left = true;
    // if last letter in word then right should be false
    if (i !== (userArray.length -1)) letter.right = true;
  word.push(letter)
};
console.log(word);
};

function returnText(){
  let input = (<HTMLInputElement>document.getElementById("userInput")!).value.toUpperCase();
  newWord(input)
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
