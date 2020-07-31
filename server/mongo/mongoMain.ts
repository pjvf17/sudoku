
import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";

const mongoURI = "mongodb+srv://admin:enliven-vietnam-songbird-gloaming-posse-clapper@sudoku.qzkya.mongodb.net/<dbname>?retryWrites=true&w=majority";

const client = new MongoClient();
client.connectWithUri(mongoURI);

const db = client.database("test");

// Defining schema interface
interface UserSchema {
  _id: { $oid: string };
  username: string;
  password: string;
}

const mongoUsers = db.collection<UserSchema>("users");

// insert
const insertId = await mongoUsers.insertOne({
  username: "user1",
  password: "pass1",
});

const user1 = await mongoUsers.findOne({ _id: insertId });

console.log(user1);