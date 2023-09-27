# CRUD Application using MongoDB
## Delete the document from Collection
## Code :

```mongodb

// CRUD Application with Mongo DB Shell
shopDB> db.products.insertOne({_id: 3, name: "Eraser", price: 0.5})
{ acknowledged: true, insertedId: 3 }
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 },
  { _id: 3, name: 'Eraser', price: 0.5 }
]
shopDB> db.products.deleteOne({_id: 3})
{ acknowledged: true, deletedCount: 1 }
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 }
]
shopDB>
```