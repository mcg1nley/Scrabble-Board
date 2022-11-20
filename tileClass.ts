// _empty identifies if there is a letter in a particular tile.
// _id needs to be unique to every tile that has a letter, and should either be blank or labbelled default if empty.
// _content is the particular letter of tile is not blank
// _up, _right, _down and _left identifies if there is a tile either side of the current tile. If this is a non empty tile then it will identify if there is another non-empty tile in that position (therefore unable to place), if the tile is empty then it will identify if there is another empty tile in that position.
// _duplicate will identify when a non-empty tile is hovering over another non-empty tile of the same letter.
// _posX an _posY will identify the particular position of the tile on a grid

export class Tile {
    private _empty: boolean = true;
    private _id: string = " ";
    private _content: string = " ";
    private _up: boolean =false;
    private _right: boolean =false;
    private _down: boolean = false;
    private _left: boolean = false;
    private _duplicate: boolean = false;
    private _posX: number = 0;
    private _posY: number = 0;

    public get empty() {
        return this._empty;
    }

    public set empty(Empty: boolean) {
        this._empty = Empty;
    }

    public get id() {
        return this._id;
    }

    public set id(Id: string) {
        this._id = Id;
    }

    public get content() {
        return this._content;
    }

    public set content(Content: string) {
        this._content = Content;
    }

    public get up() {
        return this._up;
    }

    public set up(Up: boolean) {
        this._up = Up;
    }

    public get right() {
        return this._right;
    }

    public set right(Right: boolean) {
        this._right = Right;
    }

    public get down() {
        return this._down;
    }

    public set down(Down: boolean) {
        this._down = Down;
    }

    public get left() {
        return this._left;
    }

    public set left(Left: boolean) {
        this._left = Left;
    }

    public get duplicate() {
        return this._duplicate;
    }

    public set duplicate(Duplicate: boolean) {
        this._duplicate = Duplicate;
    }

    public get posX() {
        return this._posX;
    }

    public set posX(PosX: number) {
        this.posX = PosX;
    }

    public get posY() {
        return this._posY;
    }

    public set posY(PosY: number) {
        this._posY = PosY;
    }

}