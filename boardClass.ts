import { createNewTile } from "./tileCreate";

export class Board {
    private _height: number = 0;
    private _width: number = 0;

    public get height() {
        return this._height;
    }

    public set height(Height: number) {
        this._height = Height;
    }

    public get width() {
        return this._width;
    }

    public set width(Width: number) {
        this._width = Width;
    }

    createGrid() {
        for (let i = 0; i < this._height; i++) {
            const div = document.createElement("div") as HTMLElement;
            for (let j = 0; j < this._width; j++) {
                let position: string = " "
                if (i == 0 && j == 0) position = "topLeft"
                else if (i == 0 && j != this.width) position = "topMiddle";
                else if ( i == 0 && j == this.width) position = "topRight";
                else if (i != this.height && j == 0) position = "middleLeft";
                else if (i != this.height && j != 0 && j != this.width) position = "middleMiddle";
                else if (i != this.height && j == this.width) position = "middleRight";
                else if (i == this.height && j == 0) position = "bottomLeft";
                else if (i == this.height && j != this.width) position = "bottomMiddle"
                else position = "bottomRight";
                createNewTile(" ", position, true);
            }
        }
    }

}