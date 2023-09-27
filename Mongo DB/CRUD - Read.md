# CRUD Application using MongoDB
## Read from Collection
## Code :

```mongodb

// CRUD Application with Mongo DB Shell
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2 },
  { _id: 2, name: 'Pencil', price: 0.8 }
]
shopDB> db.products.find({price: {$gt: 1}})
[ { _id: 1, name: 'Pen', price: 1.2 } ]
shopDB> db.products.find({_id: 1}, {name: 1})
[ { _id: 1, name: 'Pen' } ]
shopDB>

```