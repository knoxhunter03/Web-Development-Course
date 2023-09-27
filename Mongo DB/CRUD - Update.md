# CRUD Application using MongoDB
## Update the document from Collection
## Code :

```mongodb

// CRUD Application with Mongo DB Shell
shopDB> db.products.updateOne({_id: 1}, {$set: {stock: 32}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8 }
]
shopDB> db.products.updateOne({_id: 2}, {$set: {stock: 12}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 }
]
```