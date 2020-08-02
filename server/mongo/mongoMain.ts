import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";
import { Difficulty, Technique } from "../../client/src/types.d.ts";
import { createPuzzle, puzzleToString } from "../generator.ts";
import "https://deno.land/x/dotenv/load.ts";

// Defining schema interface
export interface PuzzleSchema {
  _id: { $oid: string };
  puzzleString: string;
  difficulty: Difficulty;
  reqTechs?: Technique[];
}

export class MongoClass {
  connect() {
    const mongoURI = `mongodb+srv://${Deno.env.get("DB_USER")}:${
      Deno.env.get("DB_PWD")
    }@sudoku.qzkya.mongodb.net/<dbname>?retryWrites=true&w=majority`;
    const client = new MongoClient();
    client.connectWithUri(mongoURI);
    const db = client.database("test");
    const puzzles = db.collection<PuzzleSchema>("puzzles");
    return {client, db, puzzles};
  }
}
