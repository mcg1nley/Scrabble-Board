// _empty identifies if there is a letter in a particular tile.
// _id needs to be unique to every tile that has a letter, and should either be blank or labbelled default if empty.
// _content is the particular letter of tile is not blank
// _up, _right, _down and _left identifies if there is a tile either side of the current tile. If this is a non empty tile then it will identify if there is another non-empty tile in that position (therefore unable to place), if the tile is empty then it will identify if there is another empty tile in that position.
// _duplicate will identify when a non-empty tile is hovering over another non-empty tile of the same letter.
// _posX an _posY will identify the particular position of the tile on a grid
export class Tile {
    constructor() {
        this._empty = true;
        this._id = " ";
        this._content = " ";
        this._up = false;
        this._right = false;
        this._down = false;
        this._left = false;
        this._duplicate = false;
        this._posX = 0;
        this._posY = 0;
    }
    get empty() {
        return this._empty;
    }
    set empty(Empty) {
        this._empty = Empty;
    }
    get id() {
        return this._id;
    }
    set id(Id) {
        this._id = Id;
    }
    get content() {
        return this._content;
    }
    set content(Content) {
        this._content = Content;
    }
    get up() {
        return this._up;
    }
    set up(Up) {
        this._up = Up;
    }
    get right() {
        return this._right;
    }
    set right(Right) {
        this._right = Right;
    }
    get down() {
        return this._down;
    }
    set down(Down) {
        this._down = Down;
    }
    get left() {
        return this._left;
    }
    set left(Left) {
        this._left = Left;
    }
    get duplicate() {
        return this._duplicate;
    }
    set duplicate(Duplicate) {
        this._duplicate = Duplicate;
    }
    get posX() {
        return this._posX;
    }
    set posX(PosX) {
        this.posX = PosX;
    }
    get posY() {
        return this._posY;
    }
    set posY(PosY) {
        this._posY = PosY;
    }
}
