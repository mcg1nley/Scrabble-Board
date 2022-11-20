import { createNewTile } from "./tileCreate.js";
import { Word } from "./wordClass.js";
export function createNewWord(userInput) {
    let word = new Word();
    let length = userInput.length;
    word.length = length;
    word.content = userInput.toUpperCase();
    // Need to make word id unique.
    word.id = "1234";
    let userInputArray = Array.from(userInput);
    for (let i = 0; i < userInputArray.length; i++) {
        let position;
        if (i == 0)
            position = "start";
        else if (i == userInputArray.length - 1)
            position = "end";
        else
            position = "middle";
        word.contentArray.push(createNewTile(userInputArray[i].toUpperCase(), position, false));
    }
    //console.log(word);
    return word;
}
