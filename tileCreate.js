// This function creates a new tile with its default settings. 
//No need to change PosX or PosY at this point. 
// Need to consider adding UUID in order to create a unique ID which can then be used in the CSS file.
export function createNewTile(letter, position) {
    let tile = new Tile();
    tile.empty = false;
    tile.id = "1234";
    tile.content = letter;
    if (position != "start") {
        tile.left = true;
    }
    if (position != "end") {
        tile.right = true;
    }
    console.log(tile);
}
