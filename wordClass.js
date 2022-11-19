// Each word has an array of letters
// Each word has a length
// Each word has a selected state
// Each word has a starting point on the board
export class Word {
    constructor() {
        this._id = " ";
        this._length = 0;
        this._content = " ";
        this._contentArray = [];
        this._selected = false;
        this._posX = 0;
        this._posY = 0;
    }
    get id() {
        return this._id;
    }
    set id(Id) {
        this._id = Id;
    }
    get length() {
        return this._length;
    }
    set length(Length) {
        this._length = Length;
    }
    get content() {
        return this._content;
    }
    set content(Content) {
        this._content = Content;
    }
    get contentArray() {
        return this._contentArray;
    }
    set contentArray(ContentArray) {
        this._contentArray = ContentArray;
    }
    get selected() {
        return this._selected;
    }
    set selected(Selected) {
        this._selected = Selected;
    }
    get posX() {
        return this._posX;
    }
    set posX(PosX) {
        this._posX = PosX;
    }
    get posY() {
        return this._posY;
    }
    set posY(PosY) {
        this._posY = PosY;
    }
}
