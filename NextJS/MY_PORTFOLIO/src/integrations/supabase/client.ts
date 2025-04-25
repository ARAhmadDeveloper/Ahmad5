import { MongoClient, Db } from "mongodb";

const uri = import.meta.env.VITE_MONGODB_URI || "";
const options = {};

let client: MongoClient;
let db: Db;

export async function connectToDB(): Promise<Db> {
  if (!client) {
    client = new MongoClient(uri, options);
    await client.connect();
    db = client.db("ar1008264"); // replace with actual DB name
  }
  return db;
}
