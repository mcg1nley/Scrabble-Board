// Each word has an array of letters
// Each word has a length
// Each word has a selected state
// Each word has a starting point on the board

export class Word {
    private _length: number = 0;
    private _content: string = " ";
    private _contentArray: {}[] = [];
    private _selected: boolean = false;
    private _posX: number = 0;
    private _posY: number = 0;

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