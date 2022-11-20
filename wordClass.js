// _id needs to be unique to the word.
// _length is the length of the word.
// _content is the actual word itself.
// _contentArray splits the word in to an array.
// _selected will identify when the word has been grabbed by user.
// _posX and _posY will identify the position of the first tile on the grid.
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
