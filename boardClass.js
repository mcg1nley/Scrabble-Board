import { createNewTile } from "./tileCreate";
export class Board {
    constructor() {
        this._height = 0;
        this._width = 0;
    }
    get height() {
        return this._height;
    }
    set height(Height) {
        this._height = Height;
    }
    get width() {
        return this._width;
    }
    set width(Width) {
        this._width = Width;
    }
    createGrid() {
        for (let i = 0; i < this._height; i++) {
            const div = document.createElement("div");
            for (let j = 0; j < this._width; j++) {
                let position = " ";
                if (i == 0 && j == 0)
                    position = "topLeft";
                else if (i == 0 && j != this.width)
                    position = "topMiddle";
                else if (i == 0 && j == this.width)
                    position = "topRight";
                else if (i != this.height && j == 0)
                    position = "middleLeft";
                else if (i != this.height && j != 0 && j != this.width)
                    position = "middleMiddle";
                else if (i != this.height && j == this.width)
                    position = "middleRight";
                else if (i == this.height && j == 0)
                    position = "bottomLeft";
                else if (i == this.height && j != this.width)
                    position = "bottomMiddle";
                else
                    position = "bottomRight";
                createNewTile(" ", position, true);
            }
        }
    }
}
