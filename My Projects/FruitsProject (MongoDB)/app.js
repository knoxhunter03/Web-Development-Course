import { MongoClient } from "mongodb";
import assert from "assert";

const url = "mongodb://127.0.0.1:27017";

const dbName = "fruitsDB"

const client = new MongoClient(url);

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('fruits');

  const insertResult = await collection.insertMany([
    { name: "Apple",
      score: 8,
      review: "Great Fruit"
    }, 
    { name: "Orange",
    score: 6,
    review: "Kinda sour" }, 
    { name: "Mango",
    score: 10,
    review: "Best Taste Ever" }]);
  console.log('Inserted documents =>', insertResult);

  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);


  // the following code examples can be pasted here...

  return 'done.';
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());