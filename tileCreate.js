// This function creates a new tile with its default settings. 
//No need to change PosX or PosY at this point. 
// Need to consider adding UUID in order to create a unique ID which can then be used in the CSS file.
//import {v4 as uuidv4} from "uuid";
import { Tile } from "./tileClass.js";
export function createNewTile(letter, position, empty) {
    let tile = new Tile();
    tile.empty = empty;
    //Need to make a unique id
    tile.id = "1234";
    tile.content = letter;
    if (position != "start" && position != "topLeft" && position != "bottomLeft" && position != "middleLeft") {
        tile.left = true;
    }
    if (position != "end" && position != "topRight" && position != "bottomRight" && position != "middleRight") {
        tile.right = true;
    }
    if (position == "topLeft" || position == "topMiddle" || position == "topRight" || position == "middleLeft" || position == "middleMiddle" || position == "rightMiddle") {
        tile.down = true;
    }
    if (position == "bottomLeft" || position == "bottomMiddle" || position == "bottomRight" || position == "middleLeft" || position == "middleMiddle" || position == "rightMiddle") {
        tile.up = true;
    }
    const square = document.createElement("div");
    // This adds a further element if tile is not blank
    if (tile.content != " ") {
        const letter = document.createElement("p");
        letter.classList.add("letter");
        letter.innerHTML = tile.content;
        square.appendChild(letter);
        //console.log(letter);
    }
    //console.log(tile);
    return square;
    //return tile
}
