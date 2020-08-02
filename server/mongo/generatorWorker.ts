import { Difficulty, Technique } from "../../client/src/types.d.ts";
import { createPuzzle, puzzleToString } from "../generator.ts";


self.onmessage = (message) => {
    const {difficulty, reqTechs}: {difficulty:Difficulty, reqTechs: Technique[]} = message.data;
    console.log("WebWorker Generating New Puzzle");
    postMessage(puzzleToString(createPuzzle(difficulty, reqTechs)));
}