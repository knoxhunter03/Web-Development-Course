# CRUD Application using MongoDB
## Create DBS & Collection
## Code :

```mongodb

// CRUD Application with Mongo DB Shell
shopDB> db.products.insertOne({_id: 2, name: "Pencil", price: 0.80})
{ acknowledged: true, insertedId: 2 }
shopDB> show collections
products
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2 },
  {
    _id: ObjectId("6514397028cd10543a7e8816"),
    id: 2,
    name: 'Pencil',
    price: 0.8
  },
  { _id: 2, name: 'Pencil', price: 0.8 }
]
shopDB> db.collection.deleteOne({name: "Pencil"})
{ acknowledged: true, deletedCount: 0 }
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2 },
  {
    _id: ObjectId("6514397028cd10543a7e8816"),
    id: 2,
    name: 'Pencil',
    price: 0.8
  },
  { _id: 2, name: 'Pencil', price: 0.8 }
]
shopDB> show collections
products
shopDB> db.products.deleteOne({name: "Pencil"})
{ acknowledged: true, deletedCount: 1 }
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2 },
  { _id: 2, name: 'Pencil', price: 0.8 }
]
shopDB>

```