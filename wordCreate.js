import { createNewTile } from "./tileCreate.js";
import { Word } from "./wordClass.js";
export function createNewWord(userInput) {
    let word = new Word();
    let length = userInput.length;
    word.length = length;
    word.content = userInput.toUpperCase();
    let userInputArray = Array.from(userInput);
    for (let i = 0; i < userInputArray.length; i++) {
        let position;
        if (i == 0)
            position = "start";
        else if (i == userInputArray.length)
            position = "end";
        else
            position = "middle";
        word.contentArray.push(createNewTile(userInputArray[i].toUpperCase(), position));
    }
    console.log(word);
    return word;
}
