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
