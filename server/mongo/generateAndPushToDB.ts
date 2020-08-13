import { MongoClass } from "./mongoMain.ts";
console.log(MongoClass);

const db = new MongoClass()

const { puzzles } = db.connect();

for (let index = 0; index < 5; index++) {
  const generatorWorker = new Worker(
    new URL("./generatorWorker.ts", import.meta.url).href,
    { type: "module", deno: true },
  );
  generatorWorker.postMessage({ difficulty: "hard", reqTechs: ["xwing"] });
  generatorWorker.onmessage = async (message) => {
    // insert
    const insertId = await puzzles.insertOne({
      puzzleString: message.data,
      difficulty: "hard",
      reqTechs: ["xwing"],
      createdAt: new Date()
    });
    console.log(`${index} done`);
  };
}
