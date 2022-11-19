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
        if (this._empty == true) {
            console.log("This tile is empty and does not require a specific ID")
            this._id = " ";
        }
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