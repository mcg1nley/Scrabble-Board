// _id needs to be unique to the word.
// _length is the length of the word.
// _content is the actual word itself.
// _contentArray splits the word in to an array.
// _selected will identify when the word has been grabbed by user.
// _posX and _posY will identify the position of the first tile on the grid.

export class Word {
    private _id: string = " ";
    private _length: number = 0;
    private _content: string = " ";
    private _contentArray: {}[] = [];
    private _selected: boolean = false;
    private _posX: number = 0;
    private _posY: number = 0;

    public get id() {
        return this._id;
    }

    public set id(Id: string) {
        this._id = Id;
    }

    public get length() {
        return this._length;
    }

    public set length(Length: number) {
        this._length = Length;
    }

    public get content() {
        return this._content;
    }

    public set content(Content: string){
        this._content = Content;
    }

    public get contentArray(){
        return this._contentArray;
    }

    public set contentArray(ContentArray: {}[]) {
        this._contentArray = ContentArray;
    }

    public get selected(){
        return this._selected;
    }

    public set selected(Selected: boolean){
        this._selected = Selected;
    }

    public get posX(){
        return this._posX;
    }

    public set posX(PosX: number){
        this._posX = PosX;
    }

    public get posY(){
        return this._posY;
    }

    public set posY(PosY: number){
        this._posY = PosY;
    }
}